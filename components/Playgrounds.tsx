"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type DemoProps = { onComplete?: () => void };
export function DistriStoreDemo({ onComplete }: DemoProps) {
  const [nodes, setNodes] = useState<boolean[]>(Array(9).fill(true));
  const [checked, setChecked] = useState(false);
  const completed = useRef(false);
  const online = nodes.filter(Boolean).length;
  return <article className="panel playground-panel">
    <div className="eyebrow">01 / SYSTEMS · ILLUSTRATIVE SIMULATION</div>
    <h3>Break a node. Keep the file.</h3>
    <p>Disable three storage nodes, then check recovery. Six of nine shards are enough to recover the synthetic file.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10, margin: "24px 0" }}>
      {nodes.map((active, i) => <button key={i} className="button" aria-pressed={!active} aria-label={`Node ${i + 1}: ${active ? "online; disable" : "offline; restore"}`} onClick={() => { setNodes(nodes.map((value, index) => index === i ? !value : value)); setChecked(false); }} style={{ minHeight: 76, borderColor: active ? "var(--accent, #82e4c0)" : "#a77d80", opacity: active ? 1 : .65 }}>
        <span>{active ? "●" : "×"} NODE {String(i + 1).padStart(2, "0")}<br /><small>{active ? "ONLINE" : "OFFLINE"}</small></span>
      </button>)}
    </div>
    <p role="status"><strong>{online}/9 online · {online >= 6 ? "File recoverable" : "Insufficient shards"}</strong>{checked && <span><br />{online === 6 ? "Systems Explorer earned. Three failures, data still recoverable." : online >= 6 ? "Disable exactly three nodes to complete the challenge." : "Recovery needs at least six available shards. Restore a node."}</span>}</p>
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}><button className="button" onClick={() => { setChecked(true); if (online === 6 && !completed.current) { completed.current = true; onComplete?.(); } }}>Check recovery ↗</button><button className="button" onClick={() => { setNodes(Array(9).fill(true)); setChecked(false); completed.current = false; }}>Reset nodes</button></div>
    <p className="muted"><small>Threshold model: k=6, n=9. This illustration does not perform Reed–Solomon encoding, encryption, network routing, or measure repair throughput.</small></p>
  </article>;
}

const scenarios = {
  expansion: { label: "Synthetic expansion", forecast: "Rising synthetic demand; uncertainty remains.", sentiment: "Positive sample headlines, with limited evidence.", context: "Supplier links suggest shared exposure." },
  disruption: { label: "Synthetic supply disruption", forecast: "Volatile synthetic demand; wider uncertainty.", sentiment: "Mixed sample headlines around supply constraints.", context: "A concentrated supplier connection increases exposure." },
};
export function TradeIQDemo({ onComplete }: DemoProps) {
  const [scenario, setScenario] = useState<keyof typeof scenarios>("expansion");
  const [risk, setRisk] = useState("cautious");
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const complete = useRef(false);
  const fixture = scenarios[scenario];
  useEffect(() => {
    if (!running || step >= 4) return;
    const timer = window.setTimeout(() => { setStep(value => value + 1); if (step === 3) { setRunning(false); if (!complete.current) { complete.current = true; onComplete?.(); } } }, 1300);
    return () => window.clearTimeout(timer);
  }, [running, step, onComplete]);
  function reset() { setRunning(false); setStep(0); complete.current = false; }
  function advance() { setRunning(false); const next = Math.min(step + 1, 4); setStep(next); if (next === 4 && !complete.current) { complete.current = true; onComplete?.(); } }
  return <article className="panel playground-panel">
    <div className="eyebrow">02 / AGENTS · AUTHORED FIXTURE SIMULATION</div>
    <h3>Follow the evidence.</h3><p>Watch a synthetic scenario move through parallel agents into a personalized report. Every output is a fixed teaching example.</p>
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "20px 0" }}>
      <label>Scenario<br /><select className="button" value={scenario} disabled={running} onChange={event => { reset(); setScenario(event.target.value as keyof typeof scenarios); }}>{Object.entries(scenarios).map(([id, item]) => <option key={id} value={id}>{item.label}</option>)}</select></label>
      <label>Risk preference<br /><select className="button" value={risk} disabled={running} onChange={event => { reset(); setRisk(event.target.value); }}><option value="cautious">Cautious</option><option value="balanced">Balanced</option></select></label>
    </div>
    <ol style={{ paddingLeft: 22, lineHeight: 1.7 }}>
      <li><strong>Synthetic inputs</strong><p>{step >= 1 ? `${fixture.label}: sample prices, headlines, and company relationships loaded.` : "Waiting for a run."}</p></li>
      <li><strong>Fork → parallel analysis → join</strong><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 10 }}>{([['Forecast', fixture.forecast], ['Sentiment', fixture.sentiment], ['Graph context', fixture.context]]).map(([title, output]) => <div key={title} style={{ border: "1px solid var(--border, #34443f)", padding: 12, borderRadius: 12 }}><strong>{title}</strong><p>{step >= 2 ? output : "Awaiting inputs"}</p></div>)}</div></li>
      <li><strong>Personalize</strong><p>{step >= 3 ? risk === "cautious" ? "Prioritize uncertainty and concentration limits." : "Weigh evidence alongside uncertainty and diversification." : "Awaiting joined analysis."}</p></li>
      <li><strong>Aggregate report</strong><p>{step >= 4 ? "Agent Explorer earned. The coordinator combines independent evidence, records disagreement, and applies the selected risk preference. This report demonstrates orchestration; it provides no investment recommendation." : "Awaiting personalization."}</p></li>
    </ol>
    <p role="status">{step === 4 ? "Complete" : running ? "Running" : step ? "Paused" : "Ready"} · Stage {step}/4</p>
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}><button className="button" onClick={() => { if (running) setRunning(false); else { if (step === 4) { setStep(0); complete.current = false; } setRunning(true); } }}>{running ? "Pause" : step === 4 ? "Run again ↗" : step ? "Resume ↗" : "Run pipeline ↗"}</button><button className="button" disabled={step === 4} onClick={advance}>Step</button><button className="button" onClick={reset}>Reset</button></div>
    <p className="muted"><small>No live market data, model calls, confidence scores, or trading actions. Parallel cards represent independent branches, not sequential agent dependencies.</small></p>
  </article>;
}
const progressKey = "saqlain-os:progress:v1";
const stampNames = { systems: "Systems Explorer", agents: "Agent Explorer" } as const;
type Stamp = keyof typeof stampNames;
let savedStamps: Stamp[] = [];
let progressLoaded = false;
const listeners = new Set<() => void>();
function readProgress() {
  if (progressLoaded) return;
  progressLoaded = true;
  try {
    const data: unknown = JSON.parse(window.localStorage.getItem(progressKey) || "null");
    if (data && typeof data === "object" && "version" in data && data.version === 1 && "stamps" in data && Array.isArray(data.stamps)) {
      savedStamps = [...new Set(data.stamps.filter((value): value is Stamp => value === "systems" || value === "agents"))];
    }
  } catch { /* Storage can be blocked or contain invalid JSON. Keep in-memory progress. */ }
}
function subscribeProgress(listener: () => void) {
  listeners.add(listener);
  readProgress();
  listener();
  return () => { listeners.delete(listener); };
}
function updateProgress(stamps: Stamp[]) {
  savedStamps = stamps;
  try { window.localStorage.setItem(progressKey, JSON.stringify({ version: 1, stamps })); } catch { /* In-memory progress remains available. */ }
  listeners.forEach(listener => listener());
}
const emptyStamps: Stamp[] = [];
export default function Playgrounds() {
  const stamps = useSyncExternalStore(subscribeProgress, () => savedStamps, () => emptyStamps);
  const [confirmReset, setConfirmReset] = useState(false);
  function award(stamp: Stamp) { if (!savedStamps.includes(stamp)) updateProgress([...savedStamps, stamp]); }
  return <div className="playgrounds" style={{ display: "grid", gap: 24 }}>
    <aside className="panel" aria-label="Exploration progress">
      <div className="eyebrow">YOUR EXPLORATION / {stamps.length} OF 2</div>
      <p role="status">{stamps.length ? stamps.map(stamp => stampNames[stamp]).join(" · ") : "Complete a playground challenge to earn your first stamp."}</p>
      <small>Optional progress is saved in this browser when storage is available.</small>
      <div style={{ marginTop: 12 }}>{confirmReset ? <><span>Reset your exploration stamps? </span><button className="button" onClick={() => { updateProgress([]); setConfirmReset(false); }}>Confirm reset</button> <button className="button" onClick={() => setConfirmReset(false)}>Cancel</button></> : <button className="button" disabled={!stamps.length} onClick={() => setConfirmReset(true)}>Reset progress</button>}</div>
    </aside>
    <DistriStoreDemo onComplete={() => award("systems")} /><TradeIQDemo onComplete={() => award("agents")} />
  </div>;
}
