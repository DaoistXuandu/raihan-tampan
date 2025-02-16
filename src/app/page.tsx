"use client"

import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("")
  const [nama, setNama] = useState("")

  async function masuk() {
    // if (data == process.env.NEXT_PUBLIC_PASSWORD) {
    const data = await fetch("/api/make-link", {
      method: "POST",
      body: JSON.stringify({
        nama: nama,
        link: link
      })
    })
      .then(response => response.json())
      .then(data => data);
    if (data) {
      alert("Berhasil");
      setLink("");
      setNama("");
    }
    // }
  }

  return (
    <div>
      <div className="flex flex-col bg-white p-10 gap-2 text-black h-screen ">
        <label htmlFor="link">Link</label>
        <input id="link" type="text" value={link} onChange={e => setLink(e.target.value)} className="border border-2 p-3" />
        <label htmlFor="name">name</label>
        <input id="name" type="text" value={nama} onChange={e => setNama(e.target.value)} className="border border-2 p-3" />
        <button onClick={e => masuk()}>buat</button>
      </div>
    </div>
  )
}
