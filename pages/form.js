// Js Flip Kartu KTP
document.querySelector('.flip').onmouseenter = () =>{
document.querySelector('.cover').style.transform = 'perspective(1000px) rotateY(-180deg)';
document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}
document.querySelector('.flip').onmouseleave = () =>{
document.querySelector('.cover').style.transform = 'perspective(1000px) rotateY(0deg)';
document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}


// Js Live Input ke Output (dari form pengisian ke hasil cetak e-ktp)
document.querySelector('.isian-prov').oninput = () =>{
    document.querySelector('.prov').innerText = document.querySelector('.isian-prov').value;
}
document.querySelector('.isian-kota').oninput = () =>{
    document.querySelector('.kota').innerText = document.querySelector('.isian-kota').value;
}
document.querySelector('.isian-nik').oninput = () =>{
    document.querySelector('.nik').innerText = document.querySelector('.isian-nik').value;
}
document.querySelector('.isian-nama').oninput = () =>{
    document.querySelector('.nama').innerText = document.querySelector('.isian-nama').value;
}
document.querySelector('.isian-lahir').oninput = () =>{
    document.querySelector('.lahir').innerText = document.querySelector('.isian-lahir').value;
}
document.querySelector('.isian-gender').oninput = () =>{
    document.querySelector('.gender').innerText = document.querySelector('.isian-gender').value;
}
document.querySelector('.isian-goldar').oninput = () =>{
    document.querySelector('.goldar').innerText = document.querySelector('.isian-goldar').value;
}
document.querySelector('.isian-alamat').oninput = () =>{
    document.querySelector('.alamat').innerText = document.querySelector('.isian-alamat').value;
}
document.querySelector('.isian-rtrw').oninput = () =>{
    document.querySelector('.rtrw').innerText = document.querySelector('.isian-rtrw').value;
}
document.querySelector('.isian-keldesa').oninput = () =>{
    document.querySelector('.keldesa').innerText = document.querySelector('.isian-keldesa').value;
}
document.querySelector('.isian-kec').oninput = () =>{
    document.querySelector('.kec').innerText = document.querySelector('.isian-kec').value;
}
document.querySelector('.isian-agama').oninput = () =>{
    document.querySelector('.agama').innerText = document.querySelector('.isian-agama').value;
}
document.querySelector('.isian-kawin').oninput = () =>{
    document.querySelector('.kawin').innerText = document.querySelector('.isian-kawin').value;
}
document.querySelector('.isian-job').oninput = () =>{
    document.querySelector('.job').innerText = document.querySelector('.isian-job').value;
}
document.querySelector('.isian-warga').oninput = () =>{
    document.querySelector('.warga').innerText = document.querySelector('.isian-warga').value;
}
document.querySelector('.isian-berlaku').oninput = () =>{
    document.querySelector('.berlaku').innerText = document.querySelector('.isian-berlaku').value;
}


// js dynamic select option (input kelurahan berdasarkan kecamatan, kecamatan berdasarkan kota, dan kota berdasarkan provinsi)

// Todo: Create a function that loads the country, state, city, zip
const countryStateInfo = {
    "ACEH": {
      "KABUPATEN ACEH BARAT": {
        "JOHAN PAHLAWAN": [ "BLANG BEURANDANG", 
                            "DRIEN RAMPAK", 
                            "GAMPA", 
                            "KAMPUNG BELAKANG",
                            "KUTA PADANG",
                        ],
        "SAMATIGA": [   "KRUENG TINGGAI",
                        "LEUBOK",
                        "DEUAH",
                        "PANGE",
                        "COT AMUN",
                        "LEUKEUN",
                        "MESJID BARO",
                        "KEUREUSENG",
                    ],
        "BUBON": [  "ALUE BAKONG",
                    "BEURAWANG",
                    "PEULANTEU"
                ],
        "ARONGAN LAMBALEK": [   "ARONGAN", 
                                "COT BULOH",
                                "SEUNEUBOK LHONG",
                            ],
        "WOYLA": [  "ALUE PANYANG",
                    "COT SITUAH",
                    "KEULEUMBAH",
                ],
        "WOYLA BARAT": ["ALUE KEUMUNENG",
                        "IE SAYANG",
                        "MON PASONG",
                    ],
        "WOYLA TIMUR": ["ALUE KUYUN",
                        "GUNONG PAYANG",
                        "KEUBEU CAPANG",
                    ],
        "KAWAY XVI": [  "ALUE LHOK",
                        "BLANG GEUNANG",
                        "PALIMBUNGAN",
                    ],
        "MEUREUBO": [   "BUKIT JAYA",
                        "PAYA PEUNAGA",
                        "PASI PINANG",
                    ],
        "PANTE CEUREUMEN": ["BERDIKARI", 
                            "GUNONG TAROK",
                            "LHOK GUCI",
                        ],
        "PANTON REU": [ "ANTONG",
                        "BARO PAYA",
                        "COT MANGGIE",
                    ],
        "SUNGAI MAS": [ "GASEU",
                        "GLEUNG",
                        "PUNGKIE",
                    ],
      },
      "KABUPATEN ACEH BARAT DAYA": {
        "BLANGPIDIE": [ "ALUE MANGGOTA",
                        "BAHARU",
                        "GUDANG",
                    ],
        "MANGGENG": [   "KEDAI",
                        "PANTE RAJA",
                        "UJONG PADANG",
                    ],
        "KUALA BATEE": [ "ALUE PISANG",
                        "KEUDE BARO",
                        "KUTA BAHAGIA",
                    ],
      },
      "KABUPATEN ACEH BESAR": {
        "BAITUSSALAM": [    "COT PAYA",
                            "LAMPINEUNG",
                            "LAM UJONG"
                        ],
        "DARUL IMARAH": [   "GAROT",
                            "GEUNDRENG",
                            "ULEE LEUNG",    
                        ],
        "INDRAPURI": [  "CUREH",
                        "EMPEE ARA",
                        "LAMLUENG"    
                        ],
      },
      "KOTA BANDA ACEH": {
        "BAITURRAHMAN": [   "ATEUK JAWO",
                            "KAMPUNG BARU",
                            "NEUSEU ACEH"    
                        ],
        "BANDA RAYA": [  "GEUCEU INIEM",
                        "LAM ARA",
                        "LAMPUOT"    
                        ],
        "JAYA BARU": [  "PUNGE BLANG CUT",
                        "LAMTEUMEN TIMUR",
                        "LAMJAMEE"    
                        ],
      },
      "KOTA LHOKSEUMAWE": {
        "BANDA SAKTI": [    "TUMPOK TEUNGOH",
                            "SIMPANG EMPAT",
                            "PUSONG BARU"    
                        ],
        "BLANG MANGAT": [   "ALUE LIM",
                            "ASAN KAREUNG",
                            "BLANG BULOH"    
                        ],
        "MUARA DUA": [  "ALUE AWE",
                        "BLANG CRUM",
                        "KEUDEU CUNDA"    
                        ],
      },
    },


//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//
    "SUMATRA UTARA": {
      "KOTA BINJAI": {
        "BINJAI BARAT": [  "BANDAR SENEMBAH", 
                            "LIMAU MUNGKUR", 
                            "LIMAU SUNDAI"
                        ],
        "BINJAI KOTA": [    "BERNGAM", 
                            "KARTINI", 
                            "PEKAN BINJAI"
                        ],
        "BINJAI SELATAN": [ "BHAKTI KARYA", 
                            "BINJAI ESTATE",
                            "PUJIDADI", 
                        ],
      },
      "KOTA MEDAN": {
        "MEDAN AMPLAS": [  "AMPLAS", 
                            "BANGUN MULIA", 
                            "HARJOSARI"
                        ],
        "MEDAN AREA": [ "KOTAMATSUM I", 
                        "KOTAMATSUM II", 
                        "KOTAMATSUM IV"
                    ],
        "MEDAN BARAT": ["GLUGUR KOTA", 
                        "KARANG BEROMBAK",
                        "KESAWAN", 
                    ],
      },
      "KOTA PEMATANGSIANTAR": {
        "SIANTAR BARAT": [  "BANJAR", 
                            "BANTAN", 
                            "DWIKORA"
                        ],
        "SIANTAR TIMUR": [  "ASUHAN", 
                            "MERDEKA", 
                            "KEBUN SAYUR"
                        ],
        "SIANTAR UTARA": [  "BANE", 
                            "BARU",
                            "KAHEAN", 
                        ],
        "SIANTAR SELATAN": ["AEK NAULI", 
                            "KARO",
                            "SIMALUNGUN"
                        ],
      },
    },


//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//
    "SUMATRA BARAT": {
      "KABUPATEN AGAM": {
        "IV KOTO": ["BALINGKA",
                    "KOTO GADANG", 
                    "KOTO TUO",
                ],
        "AMPEK ANGKEK": [   "AMPAN GADANG",
                            "BALAI GURAH",
                            "BATU TABA"
                ],
        "BANUHAMPU": [  "CINGKARIANG",
                        "KUBANG PUTIAH",
                        "LADANG LAWEH"
                ],
      },
    },

//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//BATAS PROVINSI//
    "RIAU": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "JAMBI": {
        Bavaria: {
          Munich: ["80331", "80333", "80335", "80336"],
          Nuremberg: ["90402", "90403", "90404", "90405"],
        },
        Hessen: {
          Frankfurt: ["60306", "60308", "60309", "60310"],
          Surat: ["55246", "55247", "55248", "55249"],
        },
      },
    "SUMATRA SELATAN": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "BENGKULU": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "LAMPUNG": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "KEPULAUAN BANGKA BELITUNG": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "DKI JAKARTA": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "JAWA BARAT": {
      "KABUPATEN BANDUNG": {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      "KABUPATEN BANDUNG BARAT": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN BEKASI": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN BOGOR": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN CIAMIS": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN CIANJUR": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN CIREBON": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN GARUT": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN INDRAMAYU": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN KARAWANG": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN KUNINGAN": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN MAJALENGKA": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN PANGANDARAN": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN PURWAKARTA": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN SUBANG": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN SUKABUMI": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN SUMEDANG": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KABUPATEN TASIKMALAYA": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KOTA BANDUNG": {
        "ANDIR": [ "CAMPAKA", 
                    "CIROYOM", 
                    "DUNGUSCARIANG", 
                    "GARUDA",
                    "KEBONJERUK",
                    "MALEBER",
                ],
        "ASTANA ANYAR": [   "CIBADAK", 
                            "KARANGANYAR", 
                            "KARASAK"
                        ],
        "ANTAPANI": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "ARCAMANIK": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "BABAKAN CIPARAY": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "BANDUNG KIDUL": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "BANDUNG KULON": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "BANDUNG WETAN": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "BATUNUNGGAL": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "BOJONGLOA KALER": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "BOJONGLOA KIDUL": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "BUAHBATU": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "CIBEUNYING KALER": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "CIBEUNYING KIDUL": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "CIBIRU ": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "CICENDO ": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "CIDADAP": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "CINAMBO": [ "60306", 
                    "60308", 
                    "60309", 
                    "60310",
                ],
        "COBLONG": [   "CIPAGANTI", 
                        "DAGO", 
                        "LEBAKGEDE", 
                        "LEBAKSILIWANGI",
                        "SADANGSERAN",
                        "SEKELOA",
                ],
      },
      "KOTA BANJAR": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KOTA BEKASI": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KOTA BOGOR": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KOTA CIMAHI": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KOTA CIREBON": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KOTA DEPOK": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KOTA SUKABUMI": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
      "KOTA TASIKMALAYA": {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "JAWA TENGAH": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "DI YOGYAKARTA": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "JAWA TIMUR": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "BANTEN": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "BALI": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "NUSA TENGGARA BARAT": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "NUSA TENGGARA TIMUR": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "KALIMANTAN BARAT": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "KALIMANTAN TENGAH": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "KALIMANTAN SELATAN": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "KALIMANTAN TIMUR": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "KALIMANTAN UTARA": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "SULAWESI UTARA": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "SULAWESI TENGAH": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "SULAWESI SELATAN": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "SULAWESI TENGGARA": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "GORONTALO": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "SULAWESI BARAT": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "MALUKU": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "MALUKU UTARA": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "PAPUA": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "PAPUA BARAT": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "PAPUA SELATAN": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "PAPUA TENGAH": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "PAPUA PEGUNUNGAN": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    "PAPUA BARAT DAYA": {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
};

//todo: Get all input html elements from the DOM
window.onload = function () {
    const countrySelection = document.querySelector("#Country"),
      stateSelection = document.querySelector("#State"),
      citySelection = document.querySelector("#City"),
      zipSelection = document.querySelector("#Zip");


    // todo: Disable all  Selection by setting disabled to false
    stateSelection.disabled = true; // remove all options bar first
    citySelection.disabled = true; // remove all options bar first
    zipSelection.disabled = true; // remove all options bar first

    stateSelection.length = 1; // remove all options bar first
    citySelection.length = 1; // remove all options bar first
    zipSelection.length = 1; // remove all options bar first

    for (let country in countryStateInfo) {
        countrySelection.options[countrySelection.options.length] = new Option(
          country,
          country
        )
    };

    //Todo: Country Changed

    countrySelection.onchange = (e) => {
        stateSelection.disabled = false;

        // todo: Clear all options from State Selection
        stateSelection.length = 1; // remove all options bar first
        citySelection.length = 1; // remove all options bar first
        zipSelection.length = 1; // remove all options bar first

        // if (e.target.selectedIndex < 1) return; // done

        // todo: Load states by looping over countryStateInfo

        for (let state in countryStateInfo[e.target.value]) {
            stateSelection.options[stateSelection.options.length] = new Option(
                state,
                state
            );
        }
    };


    //todo: State Changed
    stateSelection.onchange = (e) => {
        citySelection.disabled = false;
        
        citySelection.length = 1; // remove all options bar first   
        zipSelection.length = 1; // remove all options bar first

        for (let city in countryStateInfo[countrySelection.value][e.target.value]) {
            citySelection.options[citySelection.options.length] = new Option(
                city,
                city
            );
        }
    };


    //todo: City Changed
    citySelection.onchange = (e) => {
        zipSelection.disabled = false;
        
        zipSelection.length = 1;

        let zips = 
        countryStateInfo[countrySelection.value][stateSelection.value][
            e.target.value
        ];
        
        for (let i = 0 ; i < zips.length ; i++){
            zipSelection.options[zipSelection.options.length] = new Option(
                zips[i],
                zips[i]
            );
        }
    };
};





// Js Kesesuaian Inputan Provinsi dan Kota
// function populate(sprov, skota){
//     var sprov = document.getElementById(sprov);
//     var skota = document.getElementById(skota);

//     skota.innerHTML = "";

//     if(sprov.value == "JAWA BARAT"){
//         var optionArray = ['|', 'KOTA BANDUNG|*Kota Bandung',
//                                 'KABUPATEN BANDUNG|Kabupaten Bandung',
//                                 'KABUPATEN BANDUNG BARAT|Kabupaten Bandung Barat',
//                                 'KABUPATEN BEKASI|Kabupaten Bekasi',
//                                 'KABUPATEN BOGOR|Kabupaten Bogor',
//                                 'KABUPATEN CIAMIS|Kabupaten Ciamis',
//                                 'KOTA BANJAR|Kota Banjar',
//                                 'KOTA BEKASI|Kota Bekasi',
//                                 'KOTA BOGOR|Kota Bogor',
//                                 'KOTA CIMAHI|Kota Cimahi'];
//     }
//     else if(sprov.value == "DKI JAKARTA"){
//         var optionArray = ['|', 'JAKARTA PUSAT|Jakarta Pusat',
//                                 'JAKARTA UTARA|Jakarta Utara',
//                                 'JAKARTA BARAT|Jakarta Barat',
//                                 'JAKARTA SELATAN|Jakarta Selatan',
//                                 'JAKARTA TIMUR|Jakarta Timur'];
//     }
//     else if(sprov.value == "ACEH"){
//         var optionArray = ['|', 'KABUPATEN ACEH BARAT|Kabupaten Aceh Barat',
//                                 'KABUPATEN ACEH BARAT DAYA|Kabupaten Aceh Barat Daya',
//                                 'KABUPATEN ACEH BESAR|Kabupaten Aceh Besar',
//                                 'KABUPATEN ACEH JAYA|Kabupaten Aceh Jaya',
//                                 'KOTA BANDA ACEH|Kota Banda Aceh',
//                                 'KOTA LANGSA|Kota Langsa',
//                                 'KOTA LHOKSEUMAWE|Kota Lhokseumawe'];
//     }
//     else if(sprov.value == "JAWA TENGAH"){
//         var optionArray = ['|', 'KABUPATEN BANJARNEGARA|Kabupaten Banjarnegara',
//                                 'KABUPATEN BANYUMAS|Kabupaten Banyumas',
//                                 'KABUPATEN BATANG|Kabupaten Batang',
//                                 'KOTA MAGELANG|Kota Magelang',
//                                 'KOTA PEKALONGAN|Kota Pekalongan',
//                                 'KOTA SALATIGA|Kota Salatiga',
//                                 'KOTA SEMARANG|Kota Semarang',
//                                 'KOTA SURAKARTA|Kota Surakarta'];
//     }
//     for(var option in optionArray){
//         var pair = optionArray[option].split("|");
//         var newoption = document.createElement("option");

//         newoption.value = pair[0];
//         newoption.innerHTML = pair[1];
//         skota.options.add(newoption);
//     }
// }


// Js Kesesuaian Inputan Kota dan Kel/Desa
// function populate(skota, skec){
//     var skota = document.getElementById(skota);
//     var skec = document.getElementById(skec);

//     skec.innerHTML = "";

//     if(skota.value == "KOTA BANDUNG"){
//         var optionKec = ['|', 'KOTA BANDUNG|*Kota Bandung',
//                                 'KABUPATEN BANDUNG|Kabupaten Bandung',
//                                 'KABUPATEN BANDUNG BARAT|Kabupaten Bandung Barat',
//                                 'KABUPATEN BEKASI|Kabupaten Bekasi',
//                                 'KABUPATEN BOGOR|Kabupaten Bogor',
//                                 'KABUPATEN CIAMIS|Kabupaten Ciamis',
//                                 'KOTA BANJAR|Kota Banjar',
//                                 'KOTA BEKASI|Kota Bekasi',
//                                 'KOTA BOGOR|Kota Bogor',
//                                 'KOTA CIMAHI|Kota Cimahi'];
//     }
//     else if(skota.value == "DKI JAKARTA"){
//         var optionKec = ['|', 'JAKARTA PUSAT|Jakarta Pusat',
//                                 'JAKARTA UTARA|Jakarta Utara',
//                                 'JAKARTA BARAT|Jakarta Barat',
//                                 'JAKARTA SELATAN|Jakarta Selatan',
//                                 'JAKARTA TIMUR|Jakarta Timur'];
//     }
//     else if(skota.value == "ACEH"){
//         var optionKec = ['|', 'KABUPATEN ACEH BARAT|Kabupaten Aceh Barat',
//                                 'KABUPATEN ACEH BARAT DAYA|Kabupaten Aceh Barat Daya',
//                                 'KABUPATEN ACEH BESAR|Kabupaten Aceh Besar',
//                                 'KABUPATEN ACEH JAYA|Kabupaten Aceh Jaya',
//                                 'KOTA BANDA ACEH|Kota Banda Aceh',
//                                 'KOTA LANGSA|Kota Langsa',
//                                 'KOTA LHOKSEUMAWE|Kota Lhokseumawe'];
//     }
//     else if(skota.value == "JAWA TENGAH"){
//         var optionKec = ['|', 'KABUPATEN BANJARNEGARA|Kabupaten Banjarnegara',
//                                 'KABUPATEN BANYUMAS|Kabupaten Banyumas',
//                                 'KABUPATEN BATANG|Kabupaten Batang',
//                                 'KOTA MAGELANG|Kota Magelang',
//                                 'KOTA PEKALONGAN|Kota Pekalongan',
//                                 'KOTA SALATIGA|Kota Salatiga',
//                                 'KOTA SEMARANG|Kota Semarang',
//                                 'KOTA SURAKARTA|Kota Surakarta'];
//     }
//     for(var option in optionKec){
//         var pair = optionKec[option].split("|");
//         var newoptionKec = document.createElement("option");

//         newoptionKec.value = pair[0];
//         newoptionKec.innerHTML = pair[1];
//         skec.options.add(newoptionKec);
//     }
// }















 




  