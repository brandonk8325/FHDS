import { useCallback, useMemo, useState } from "react";

/**
 * DAF Direct — Pure React port (no document.write, no globals)
 * Settings from your string: "880543157_1111_0f856050-b6a5-455b-b426-d0e4bb6931da"
 * - TIN:      880543157
 * - Size:     "1" (middle block's first digit)
 * - showDsg:  true  (second digit "1")
 * - showAmt:  true  (third digit "1")
 * - showBorder:true (fourth digit "1")
 * - Token:    0f856050-b6a5-455b-b426-d0e4bb6931da
 * Dropdown:   "f,s,m"  (Fidelity, Schwab(DAFgiving360), BNY Mellon)
 */
export default function DAFDirectReact() {
  // ---- Derived from your settings string ----
  const settings = "880543157_1111_0f856050-b6a5-455b-b426-d0e4bb6931da";
  const parsed = useMemo(() => {
    // Very defensive parse against underscores
    // Expected: <TIN>_<flags><flags><flags><flags>_<TOKEN>
    // Example:  880543157_1111_0f85...
    const [tinPart, flagsPart, tokenPart] = settings.split("_");
    const tin = (tinPart ?? "").slice(0, 9);
    const size = (flagsPart ?? "1").slice(0, 1) || "1";
    const showDsg = (flagsPart ?? "1111").slice(1, 2) !== "0";
    const showAmt = (flagsPart ?? "1111").slice(2, 3) !== "0";
    const showBorder = (flagsPart ?? "1111").slice(3, 4) !== "0";
    const token = tokenPart ?? "";

    return { tin, size, showDsg, showAmt, showBorder, token };
  }, [settings]);

  // ---- UI State ----
  const [provider, setProvider] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [amount, setAmount] = useState<string>("$");
  const [showWhat, setShowWhat] = useState<boolean>(false);

  // ---- Submit logic (ported from original DAFDirectSubmit) ----
  const onSubmit = useCallback(() => {
    if (!provider) {
      alert("Please select a donor advised fund.");
      return;
    }

    const _npoid = parsed.tin;
    const _dafdirect_token = parsed.token;

    let _dsgtxt = encodeURIComponent(designation ?? "");
    const _amnt = (amount ?? "").replace(/[^0-9.]+/g, ""); // keep digits and dot

    let dafUrl = "";
    if (provider === "FC") {
      dafUrl = "https://charitablegift.fidelity.com/cgfweb/CGFLogon.cgfdo";
    } else if (provider === "SC") {
      // Schwab (DAFgiving360)
      dafUrl =
        "https://client.schwab.com/Areas/Access/Login?KC=Y&cgift=y&";
    } else if (provider === "BNYM") {
      dafUrl =
        "https://bnym.iphiview.com/bnym/API/Grants.mvc.axd/DafDirect";
    }

    let action = "";
    if (provider === "SC") {
      // Schwab uses pipe-separated params + |ddtoken=
      const qs =
        `Npo_Id=${_npoid}` +
        `|Grnt_Amnt=${_amnt}` +
        `|Device_Type=Widget|App_Id=MDNR|source=widget` +
        `|Grnt_Dsg_Txt=${_dsgtxt}`;
      action = dafUrl + qs + `|ddtoken=${_dafdirect_token}`;
    } else {
      // Fidelity / BNYM querystring + &ddtoken=
      const qs =
        `Npo_Id=${_npoid}` +
        `&Grnt_Amnt=${_amnt}` +
        `&Grnt_Dsg_Txt=${_dsgtxt}` +
        `&Device_Type=Widget&App_Id=MDNR&source=widget`;
      action = `${dafUrl}?${qs}&ddtoken=${_dafdirect_token}`;
    }

    // Open new window like original
    const popupWindow = window.open(action, "_blank");
    popupWindow?.focus();

    // Clear inputs like original
    setProvider("");
    setDesignation("");
    setAmount("$");
  }, [provider, designation, amount, parsed]);

  // ---- Keyboard handler (Enter triggers submit) ----
  const onKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSubmit();
      }
    },
    [onSubmit]
  );

  // ---- Simple styles approximating the original widget ----
  const borderClass = parsed.showBorder
    ? "border border-gray-300"
    : "border-0";
  const widthClass =
    parsed.size === "2"
      ? "max-w-sm"
      : parsed.size === "0"
      ? "max-w-xs"
      : "max-w-md";

  return (
    <div
      className={`bg-white ${borderClass} ${widthClass} p-4 rounded-md text-black`}
      onKeyDown={onKeyPress}
      id="dafdirectdiv"
    >
      <div className="mb-3">
        {/* Logo variant based on size like original */}
        {parsed.size === "2" ? (
          <img
            src="https://www.dafdirect.org/ddirect/images/logo-DAF-direct2.jpg"
            alt="Logo DAF Direct"
          />
        ) : (
          <img
            src="https://www.dafdirect.org/ddirect/images/logo-DAF-direct1.jpg"
            alt="Logo DAF Direct"
          />
        )}
      </div>

      <div className="text-right mb-2">
        <button
          type="button"
          className="text-sm underline"
          id="showwhatisthis"
          onClick={() => setShowWhat((s) => !s)}
        >
          {showWhat ? "Close" : "What is this?"}
        </button>
      </div>

      {showWhat && (
        <div
          id="whatisthis"
          className='text-sm font-sans'
          style={{
            fontFamily:
              '"Lucida Grande","Lucida SansUnicode",Arial,sans-serif',
            lineHeight: "1.2em",
          }}
        >
          <div style={{ maxHeight: 160, overflowY: "auto" }}>
            <p>
              A donor advised fund (DAF) is a charitable giving program that
              allows you to combine the most favorable tax benefits with the
              flexibility to support your favorite causes.
            </p>
            <p>
              If you have a donor advised fund, DAF Direct enables you to
              recommend grants to this nonprofit directly from your DAF (as
              long as your DAF&apos;s sponsoring organization is
              participating).
            </p>
          </div>
        </div>
      )}

      <div id="notwhatisthis">
        <label htmlFor="dafprovider" className="font-medium">
          Donate now from:
        </label>
        <br />
        <select
          id="dafprovider"
          className="w-full mt-1 mb-3 border rounded p-2"
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
        >
          {/* When both s and f present, original adds a placeholder */}
          <option value="">--Please select--</option>
          {/* f,s,m order like original dropdown "f,s,m" */}
          <option value="FC">Fidelity Charitable</option>
          <option value="SC">DAFgiving360</option>
          <option value="BNYM">BNY Mellon</option>
        </select>

        {parsed.showDsg && (
          <>
            <label htmlFor="dafdirect_dsgtxt" className="font-medium">
              Designation:
            </label>
            <br />
            <input
              id="dafdirect_dsgtxt"
              type="text"
              className="w-full mt-1 mb-3 border rounded p-2"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder=""
            />
          </>
        )}

        {parsed.showAmt && (
          <div className="mb-3">
            <label htmlFor="dafdirect_amnt" className="font-medium">
              Amount:
            </label>
            <br />
            <input
              id="dafdirect_amnt"
              type="text"
              className="w-full mt-1 border rounded p-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="$"
            />
          </div>
        )}

        <div className="flex justify-end">
          <button
            id="dafdirectsubmit"
            type="button"
            className="inline-flex items-center gap-2  rounded px-4 py-2 hover:bg-gray-50"
            onClick={onSubmit}
          >
            <img
              src={
                parsed.size === "2"
                  ? "https://www.dafdirect.org/ddirect/images/button-next2.jpg"
                  : "https://www.dafdirect.org/ddirect/images/button-next1.jpg"
              }
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
