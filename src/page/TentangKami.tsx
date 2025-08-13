function TentangKami() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[84.1dvh]">
      <h1 className="text-3xl font-semibold text-center">Tentang Kami</h1>
      <div className="flex justify-between items-start max-w-5xl mx-auto mt-16">
        <div className="">
          <h1 className="text-xl font-semibold">Profil Penulis</h1>
          <img
            src="/profil_penulis.png"
            alt=""
            className="h-[250px] mt-2 border rounded border-black/20"
          />
          <p className="text-xl font-semibold mt-2">
            Iin Septiani Laili, S.Sos.I, Gr.
          </p>
          <p className="mt-2">
            Tempat Tanggal Lahir :{" "}
            <span className="font-semibold">Sleman, 29 September 1991</span>
          </p>
          <p className="mt-2">
            Agama : <span className="font-semibold">Islam</span>
          </p>
          <p className="mt-2">Riwayat Pendidikan :</p>
          <ul className="list-disc pl-4">
            <li className="mt-1">SD Negeri Susukan Seyegan</li>
            <li className="mt-1">SMP Negeri 1 Seyegan</li>
            <li className="mt-1">SMA Negeri 1 Seyegan</li>
            <li className="mt-1">S1 — UIN Sunan Kalijaga Yogyakarta</li>
            <li className="mt-1">PPG — Universitas Negeri Padang</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold">Profil Pembimbing</h1>
          <img
            src="/profil_pembimbing.png"
            alt=""
            className="h-[250px] mt-2 border rounded border-black/20"
          />
          <p className="text-xl font-semibold mt-2">
            Dr. Aprilia Tina Lidyasari, M.Pd
          </p>
          <p className="mt-2">
            NIP : <span className="font-semibold">19820425 200501 2 001</span>
          </p>
          <p className="mt-2">
            Tempat Tanggal Lahir :{" "}
            <span className="font-semibold">Surakarta, 25 April 1982</span>
          </p>
          <p className="mt-2">
            Agama : <span className="font-semibold">Islam</span>
          </p>
          <p className="mt-2">
            Jabatan : <span className="font-semibold">Dosen UNY</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TentangKami;
