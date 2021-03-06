
const data = [
    {
      "id": 0,
      "nombre": "Base True Match Tinted Serum Medium Tan 5-6",
      "precio": 1090,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814464/img/1_jv57o2.jpg",
      "stock": 5,
      "categoryid":1,
      "descrip": "Base de alta cobertura True Match, deja la piel alisada y sin imperfecciones para un look increíble."
    },
    {
      "id": 1,
      "nombre": "Corrector True Match Cream Light N 3-4 12ml",
      "precio": 720,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814464/img/2_j8kbsr.jpg",
      "stock": 6,
      "categoryid":1,
      "descrip": "Corrector True Match Cream Light N 3-4 12ml"
    },
    {
      "id": 2,
      "nombre": "Corrector Physicians Twins Cream Yellow",
      "precio": 495,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814464/img/3_pc8vfv.jpg",
      "stock": 7,
      "categoryid":1,
      "descrip": "Un corrector de color y un corrector en crema de tono claro para ayudarte a lograr una piel de aspecto impecable. El amarillo oculta las decoloraciones azuladas de la piel. Fórmula suave y cremosa, resistente a la transferencia, resistente al agua y se esfuma suavemente hasta un acabado aterciopelado."
    },
    {
      "id": 3,
      "nombre": "Base Physician Butter Believe It Light Me 758",
      "precio": 869,
      "img": " https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814464/img/4_pcoaqz.jpg",
      "stock": 10,
      "categoryid":1,
      "descrip": "Base + corrector ultralujosa, con poderosa mezcla de manteca de Murumuru, manteca de Cupuaçu y manteca de Tucuma. Su textura cremosa se funde en la piel dejando un brillo natural, mientras que su fórmula liviana y de larga duración proporciona una cobertura increíble."

    },
    {
      "id": 4,
      "nombre": "Corrector Physicians Twins Cream Yellow",
      "precio": 495,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814464/img/5_plxcmg.jpg",
      "stock": 8,
      "categoryid":1,
      "descrip": "Un corrector de color y un corrector en crema de tono claro para ayudarte a lograr una piel de aspecto impecable. El amarillo oculta las decoloraciones azuladas de la piel. Fórmula suave y cremosa, resistente a la transferencia, resistente al agua y se esfuma suavemente hasta un acabado aterciopelado."
    },
    {
      "id": 5,
      "nombre": "Bronzer Physicians Butter Matte Sunkissed",
      "precio": 815,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814464/img/6_bxewox.jpg",
      "stock": 5,
      "categoryid":1,
      "descrip": "¡Un bronzer mate ultralujoso resistente al agua manteca Monoi y Murumuru para brindar una apariencia tahitiana mate de larga duración! Su textura cremosa y suave combina las mejores características de un bronzer en polvo y crema para brindar un acabado mate con aerógrafo como ningún otro."

    },
    {
      "id": 6,
      "nombre": "Bronzer Physicians Murumuru Sunkissed",
      "precio": 815,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814464/img/7_nsnind.jpg",
      "stock": 18,
      "categoryid":1
    },
    {
      "id": 7,
      "nombre": "Base Physician Butter Believe It Medium 759",
      "precio": 869,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814464/img/8_n6lska.jpg",
      "stock": 5,
      "categoryid":1
    },
    {
      "id": 8,
      "nombre": "Base Physician Butter Believe It Light 757",
      "precio": 869,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/9_uqpu5b.jpg",
      "stock": 11,
      "categoryid":1
    },
    {
      "id": 9,
      "nombre": "Base Fit Me Mate 220",
      "precio": 750,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814464/img/10_d5haa3.jpg",
      "stock": 4,
      "categoryid":1
    },
    {
      "id": 10,
      "nombre": "Corrector De Ojeras Maybelline Instant Age Rewind Eraser Dark Cirles Neutralizer X 6ml",
      "precio": 700,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/11_ki2nr2.jpg",
      "stock": 5,
      "categoryid":1
    },
    {
      "id":11 ,
      "nombre": "Corrector De Ojeras Maybelline Instant Age Rewind Eraser Dark Cirles Honey X 6ml",
      "precio": 700,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/12_fba4kl.jpg",
      "stock": 8,
      "categoryid":1
    }, 
    {
      "id": 12,
      "nombre": "Base Bb Cream Medio 75 Ml",
      "precio":532 ,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/13_cdsykn.jpg",
      "stock": 6,
      "categoryid":1
    }, {
      "id":13 ,
      "nombre": "Base Fit Me Mate 130",
      "precio": 750,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/14_f0tsfs.jpg",
      "stock": 3,
      "categoryid":1
    }, {
      "id":14 ,
      "nombre": "Base Lancome Teint Idole Ultra 06 Spf15 30ml",
      "precio": 3170,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/15_rkb2ho.jpg",
      "stock": 5,
      "categoryid":1
    }, {
      "id": 15,
      "nombre": "Base Bb Cream Claro 75 Ml",
      "precio": 532,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/16_ngmivr.jpg",
      "stock": 8,
      "categoryid":1
    },  {
      "id": 16,
      "nombre": "Base Fit Me Mate 235",
      "precio": 750,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/17_uhp6w5.jpg",
      "stock": 5,
      "categoryid":1
    }, {
      "id": 17,
      "nombre": "Base Fit Me Matte + Poreless Foundation Natural Buff",
      "precio": 722,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/18_csuae0.jpg",
      "stock": 9,
      "categoryid":1
    }, {
      "id": 18,
      "nombre": "Polvo Maybelline City Bronzer 300",
      "precio": 676,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/19_otg4uh.jpg",
      "stock": 4,
      "categoryid":1
    }, {
      "id": 19,
      "nombre": "Base Maybelline Fit Me Mate+pore Nude Beige",
      "precio": 750,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/20_iiebri.jpg",
      "stock": 10,
      "categoryid":1
    }, {
      "id": 20,
      "nombre": "Primer Max Factor Miracle Prep Illuminating + Hydrating",
      "precio": 780,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814466/img/21_czho5x.jpg",
      "stock": 7,
      "categoryid":1
    }, {
      "id": 21,
      "nombre": "Base L’oreal Infallible Fresh Wear Foundation 24hr Amber",
      "precio": 1080,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814466/img/22_ftslem.jpg",
      "stock": 5,
      "categoryid":1
    }, {
      "id": 22,
      "nombre": "Polvo Maybelline Mast Chrome Molten Gold 6.7 Gr",
      "precio": 676,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814465/img/23_ll0gpx.jpg",
      "stock": 9,
      "categoryid":1
    }, {
      "id": 23,
      "nombre": "Base De Maquillaje Maybelline Super Stay 24hs Full Coverage Golden X30 Ml",
      "precio": 921,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814466/img/24_azrpl5.jpg",
      "stock": 5,
      "categoryid":1
    }, {
      "id": 24,
      "nombre": "Base De Maquillaje Maybelline Super Stay 24hs Full Coverage Classic Ivory X30 Ml",
      "precio": 960,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814466/img/25_y9cnmb.jpg",
      "stock": 15,
      "categoryid":1
    }, {
      "id": 25,
      "nombre": "Rubor Lancome Effacernes 02 15ml",
      "precio": 2070,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814466/img/26_prx7dy.jpg",
      "stock": 5,
      "categoryid":1
    }, {
      "id": 26,
      "nombre": "Base Revlon Colorstay 2 In 1 Beige",
      "precio": 1050,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814466/img/27_ravhib.jpg",
      "stock": 9,
      "categoryid":1
    }, {
      "id": 27,
      "nombre": "Polvo Revlon New Complex Make Up 04",
      "precio": 1050,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814466/img/28_potzb4.jpg",
      "stock": 4,
      "categoryid":1
    }, {
      "id": 28,
      "nombre": "Polvo Compacto Revlon Photoready Candid 01",
      "precio": 800,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814463/img/29_irckt4.jpg",
      "stock": 5,
      "categoryid":1
    }, {
      "id": 29,
      "nombre": "Base Revlon Photoready Candid True 340",
      "precio": 800,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814463/img/30_yffxlt.jpg",
      "stock": 3,
      "categoryid":1
    }, {
      "id": 30,
      "nombre": "Base Revlon Photoready Candid Anti Contaminación Natural 350",
      "precio": 800,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814463/img/31_mbbrrr.jpg",
      "stock": 9,
      "categoryid":1
    }, {
      "id": 31,
      "nombre": "Base Revlon Photoready Candid Anti Contaminación Tawny 320",
      "precio": 800,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814463/img/32_qi5yjz.jpg",
      "stock": 4,
      "categoryid":1
    }, {
      "id": 32,
      "nombre": "Base Revlon Photoready Candid Anti Contaminación Butterscotch 310",
      "precio": 800,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814463/img/33_x3ut4h.jpg",
      "stock": 8,
      "categoryid":1
    }, {
      "id": 33,
      "nombre": "Base Revlon Photoready Candid Anti Contaminación Medium Beige 270",
      "precio": 700,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654814464/img/34_mkwv0f.jpg",
      "stock": 5,
      "categoryid":1

    }, {
      "id": 34,
      "nombre": "Labial L'oreal Infallible Labial Passionate",
      "precio": 1035,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044341/img/35_wqdpyd.jpg",
      "stock": 5,
      "categoryid":2
    }
    , {
      "id": 35,
      "nombre": "Labial L'oreal Infallible Flamboyant",
      "precio": 1035,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/36_dvuxcm.jpg",
      "stock": 6,
      "categoryid":2
    }
    , {
      "id": 36,
      "nombre": "Labial L'oreal Infallible Merlot",
      "precio": 1035,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/37_wslvuq.jpg",
      "stock": 8,
      "categoryid":2
    }
    , {
      "id": 37,
      "nombre": "Labial L'oreal Infallible Lilac Infinite",
      "precio": 1035,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/38_lhyv2d.jpg",
      "stock": 4,
      "categoryid":2
    } , {
      "id": 38,
      "nombre": "Labial Lancome Absolue Lacquer 468",
      "precio": 1137,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/39_n978m1.jpg",
      "stock": 2,
      "categoryid":2
    }, {
      "id": 39,
      "nombre": "Labial Gloss L'oreal Paris Infallible X 3",
      "precio": 1035,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/40_caf93c.jpg",
      "stock": 4,
      "categoryid":2
    }, {
      "id": 40,
      "nombre": "Labial Liquidol'oreal Infallible 24h Toujours Teaberry 213",
      "precio": 1035,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044680/img/41_fj4kwm.jpg",
      "stock": 5,
      "categoryid":2
    }, {
      "id": 41,
      "nombre": "Labial Gloss L'oreal Paris Infallible X 3",
      "precio": 1035,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/42_trmd1k.jpg",
      "stock": 5,
      "categoryid":2
    }, {
      "id": 42,
      "nombre": "Lapiz Labial Color Riche Caramel Latte 799",
      "precio": 755,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/43_xysf1z.jpg",
      "stock": 3,
      "categoryid":2
    }, {
      "id": 43,
      "nombre": "Labial Gloss L'oreal Paris Infallible Red X 3",
      "precio": 1035,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/44_pdhadk.jpg",
      "stock": 1,
      "categoryid":2
    }, {
      "id": 44,
      "nombre": "Lapiz Labial Lancome Absolue Lacquer N312",
      "precio": 1750,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/45_ivhakw.jpg",
      "stock": 5,
      "categoryid":2
    }, {
      "id": 45,
      "nombre": "Labial L'oreal Paris Color Riche X 3",
      "precio": 755,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/46_dhuz8g.jpg",
      "stock": 5,
      "categoryid":2
    }, {
      "id": 46,
      "nombre": "Lapiz Labial Color Riche Luminous Golden Splendor 805",
      "precio": 755,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/47_enpnob.jpg",
      "stock": 5,
      "categoryid":2
    }, {
      "id": 47,
      "nombre": "Lapiz Labial Color Riche Luminous Classic Wine 752",
      "precio": 755,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/48_zqzaug.jpg",
      "stock": 7,
      "categoryid":2
    }, {
      "id": 48,
      "nombre": "Lapiz Labial Lancome Absolue Lacquer N 274",
      "precio": 1750,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/49_cypop8.jpg",
      "stock": 4,
      "categoryid":2
    }, {
      "id": 49,
      "nombre": "Lapiz Labial Lancome Absolue Lacquer N 274",
      "precio": 1750,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/50_mherra.jpg",
      "stock": 3,
      "categoryid":2
    }, {
      "id": 50,
      "nombre": "Lapiz Labial Lancome Absolue Lacquer N 134",
      "precio": 1750,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655044679/img/51_fzhcdm.jpg",
      "stock": 5,
      "categoryid":2
    }, {
      "id": 51,
      "nombre": "Paleta De Sombras Aily 8 Unidades",
      "precio": 475,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655046518/img/52_a42mcr.jpg",
      "stock": 3,
      "categoryid":3
    }, {
      "id": 52,
      "nombre": "Sombra Vogue Sexteto Brazil",
      "precio": 379,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655046518/img/53_vwcgzs.jpg",
      "stock": 7,
      "categoryid":3
    }, {
      "id": 53,
      "nombre": "Sombra Max Factor Smoke Eye Drama 03 Sumptuos Gold",
      "precio": 800,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655046518/img/54_sigyci.jpg",
      "stock": 4,
      "categoryid":3
    }, {
      "id": 54,
      "nombre": "Sombras Baolishi Nº 1 X7 Colores",
      "precio": 195,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655046518/img/55_bkynpy.jpg",
      "stock": 5,
      "categoryid":3
    }, {
      "id": 55,
      "nombre": "Sombra En Gel Idi Star Negro",
      "precio": 347,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655046518/img/56_jl7ymo.jpg",
      "stock": 7,
      "categoryid":3
    }, {
      "id": 56,
      "nombre": "Sombra En Gel Idi Star Bronce",
      "precio": 347,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655046518/img/57_jgkw7y.jpg",
      "stock": 7,
      "categoryid":3
    }, {
      "id": 57,
      "nombre": "Sombra En Gel Idi Star Marron",
      "precio": 347,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655046519/img/58_jtbhp2.jpg",
      "stock": 6,
      "categoryid":3
    }, {
      "id": 58,
      "nombre": "Sombra En Gel Idi Star Gris",
      "precio": 347,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655046519/img/59_uzbcds.jpg",
      "stock": 4,
      "categoryid":3
    }, {
      "id": 59,
      "nombre": "Sombra En Gel Idi Star Rose",
      "precio": 347,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655046519/img/60_cl2cbj.jpg",
      "stock": 2,
      "categoryid":3
    }, {
      "id": 60,
      "nombre": "Set De Brochas Top X5 Unidades",
      "precio": 899,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655047325/img/61_uyheya.png",
      "stock": 8,
      "categoryid":4
    }, {
      "id": 61,
      "nombre": "Set Nickak Brochas Escencial Tbpk23",
      "precio": 682,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655047325/img/62_mkawac.jpg",
      "stock": 10,
      "categoryid":4
    }, {
      "id": 62,
      "nombre": "Set Nickak Brochas Tbpk22",
      "precio": 682,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655047325/img/63_mzdnu1.jpg",
      "stock": 7,
      "categoryid":4
    }, {
      "id": 63,
      "nombre": "Brocha De Maquillaje Top",
      "precio": 899,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655047324/img/64_fgjupl.jpg",
      "stock": 10,
      "categoryid":4
    }, {
      "id": 64,
      "nombre": "Brocha Nickak Buffer Angulo",
      "precio": 568,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655047324/img/65_osdvgf.jpg",
      "stock": 8,
      "categoryid":4
    }, {
      "id": 65,
      "nombre": "Brocha Maybelline Studio Foundation",
      "precio": 725,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655047325/img/66_pupgbc.jpg",
      "stock": 6,
      "categoryid":4
    }, {
      "id": 66,
      "nombre": "Brocha Maybelline Face Studio Concealer",
      "precio": 260,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655047325/img/67_v86p6a.jpg",
      "stock": 7,
      "categoryid":4
    }, {
      "id": 67,
      "nombre": "Brocha Maybelline Studio Powder Brush",
      "precio": 823,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655047325/img/68_sxgvkg.jpg",
      "stock": 8,
      "categoryid":4
    }, {
      "id": 68,
      "nombre": "Brocha Maybelline Face Studio Shadow",
      "precio": 260,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655047325/img/69_frk1ji.jpg",
      "stock": 8,
      "categoryid":4
    }, {
      "id": 69,
      "nombre": "Mascara De Pestañas Hypnose Doll Eyes 01",
      "precio": 1920,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655048989/img/70_ghmenm.jpg",
      "stock": 8,
      "categoryid":5
    }, {
      "id": 70,
      "nombre": "Mascara De Pestañas Lash Sensational Washable Very Black",
      "precio": 940,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049082/img/71_lixfay.jpg",
      "stock": 10,
      "categoryid":5
    }, {
      "id": 71,
      "nombre": "Mascara De Pestañas Volume Express Waterproof The Rocket",
      "precio": 736,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049082/img/72_jlffys.jpg",
      "stock": 10,
      "categoryid":5
    }, {
      "id": 72,
      "nombre": "Mascara De Pestañas Lots Of Lashes Volume Black",
      "precio": 411,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049350/img/73_m3w3fd.jpg",
      "stock": 15,
      "categoryid":5
    }, {
      "id": 73,
      "nombre": "Mascara De Pestañas New Color Long Double",
      "precio": 275,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049350/img/74_sokt19.jpg",
      "stock": 20,
      "categoryid":5
    }, {
      "id": 74,
      "nombre": "Máscara De Pestañas Hypnose Drama 01",
      "precio": 1920,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049350/img/75_kqou77.jpg",
      "stock": 10,
      "categoryid":5
    }, {
      "id": 75,
      "nombre": "Mascara De Pestañas New Color Intense Volum Waterpoof",
      "precio": 274,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049350/img/76_znpsy6.jpg",
      "stock": 16,
      "categoryid":5
    }, {
      "id": 76,
      "nombre": "Mascara De Pestañas Bambi Blackest Black Wsh ",
      "precio": 1020,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049350/img/77_goz5yu.jpg",
      "stock": 10,
      "categoryid":5
    }, {
      "id": 77,
      "nombre": "Mascara De Pestañas Lancome Lash Idole Waterproof",
      "precio": 1525,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049350/img/78_vyjmk8.webp",
      "stock": 10,
      "categoryid":5
    }, {
      "id": 78,
      "nombre": "Mascara De Pestañas L'oreal Voluminous Lash Paradise Washable",
      "precio": 1061,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049350/img/79_zb6uql.jpg",
      "stock": 10,
      "categoryid":5
    }, {
      "id": 79,
      "nombre": "Cofre Hypnose Mascara + Crema Genifique + Desmaquillante Bifacico",
      "precio": 1755,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049350/img/80_zaosck.jpg",
      "stock": 10,
      "categoryid":5
    }, {
      "id": 79,
      "nombre": "Cofre Hypnose Mascara + Crema Genifique + Desmaquillante Bifacico",
      "precio": 1755,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049350/img/80_zaosck.jpg",
      "stock": 10,
      "categoryid":5
    }, {
      "id": 80,
      "nombre": "Mascara De Pestañas Hypnose Noir",
      "precio": 1920,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655050526/img/81_uh4afd.jpg",
      "stock": 10,
      "categoryid":5
    }, {
      "id": 81,
      "nombre": "Mascara Lancome Hypnose Extra Black",
      "precio": 1920,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049350/img/82_pimmsk.jpg",
      "stock": 10,
      "categoryid":5
    }, {
      "id": 82,
      "nombre": "Mascara De Pestañas Maybelline Sky High Wsh Very Black",
      "precio": 1040,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049351/img/83_wmy5oy.jpg",
      "stock": 15,
      "categoryid":5
    }, {
      "id": 83,
      "nombre": "Mascara Maybelline Flash Lift Waterproof V.blac",
      "precio": 955,
      "img": "https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1655049351/img/84_fbyve3.jpg",
      "stock": 15,
      "categoryid":5
    }
  
  ]

  export default data