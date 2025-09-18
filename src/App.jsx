
import React, {useState,useEffect} from 'react'
import data from '../tracker_data.json'
export default function App(){
  const sheets = Object.keys(data)
  const [month,setMonth]=useState(sheets[0])
  const [showLRDI,setShowLRDI]=useState(true)
  const [rows,setRows]=useState(data[month])
  const [detailRow,setDetailRow]=useState(null)
  useEffect(()=>{ setRows(data[month]) },[month])
  const progress = (rows.filter(r=>r['Check (put ✓ when done)']==='✓').length)/(rows.length||1)
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-6">
      <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Saurav Tracker</h1>
          <div className="flex items-center gap-3">
            <button className="px-3 py-2 bg-teal-500 text-white rounded">Export</button>
          </div>
        </header>
        <div className="flex gap-4">
          <aside className="w-56">
            <div className="space-y-3">
              {sheets.map(s => <button key={s} onClick={()=>setMonth(s)} className={'w-full text-left px-3 py-2 rounded '+(s===month?'bg-teal-500 text-white':'bg-transparent')}>{s}</button>)}
              <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-700 rounded">
                <div className="text-sm">Progress</div>
                <div className="text-lg font-bold">{Math.round(progress*100)}%</div>
                <label className="flex items-center gap-2 mt-3"><input type="checkbox" checked={showLRDI} onChange={e=>setShowLRDI(e.target.checked)} /> Show LRDI</label>
              </div>
            </div>
          </aside>
          <main className="flex-1">
            <div className="overflow-auto max-h-[60vh] border rounded">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-700 sticky top-0">
                  <tr>
                    {Object.keys(rows[0]||{}).map(h=> (h==='LRDI Focus Topic' && !showLRDI)? null : <th key={h} className="p-2 text-left text-sm">{h}</th>)}
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r,i)=>(
                    <tr key={i} className={(r['Check (put ✓ when done)']==='✓')?'bg-emerald-50 dark:bg-emerald-900/30':''}>
                      {Object.keys(r).map(k => (k==='LRDI Focus Topic' && !showLRDI)? null : <td key={k} className="p-2 text-sm align-top">{r[k]}</td>)}
                      <td className="p-2"><button className="px-2 py-1 bg-slate-200 dark:bg-slate-600 rounded" onClick={()=>setDetailRow(rows[i])}>Open</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
          <div className="w-80">
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
              {detailRow? <div>
                <h3 className="font-semibold">{detailRow.Date}</h3>
                {Object.keys(detailRow).map(k=><p key={k} className="text-sm"><strong>{k}:</strong> {detailRow[k]}</p>)}
                <button className="mt-3 px-3 py-2 bg-teal-500 text-white rounded">Mark Done</button>
              </div> : <div className="text-sm text-slate-500">Select a day to see details</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
