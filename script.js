// OTHER METHODS 
// console.log(testString.includes("une g")); Daxil olunan elementin, stringde olub olmadigini yoxlayir; "true" ve ya "false" qaytarir

// console.log(testString.repeat(2)); Stringi tekrara salirig, nece defe isteyirikse onu qeyd edirik.

// console.log(testString.search("el")); Elementi axtarib, bize indeksini verir. Tapmasa "-1" qayidir.

// console.log(testString.substring(8,15)); Verilen araligi stringden kesib, yeni string qaytarir.

// console.log(testString.substr(1,5)); Hansi indeksden baslayib, nece element qayidacagini qeyd edirik. USTUNDEN XETT CEKIB

// ---------------------------------------------------------------------------------------------------------------------------- //

// let myString = "Nenemin tendiri"
// console.log(myString.length) 
// // result = 15;
// // Uzunlug propertisidir, metod deyil, 
// //stringde nece character oldugunu qaytarir.

// -------------------------------------------------- //

// let testString = "Dedemin apteki"
// console.log(testString.charAt(1)); 
// //result = e
// // Elementin indeksini qeyd edib, 
// // o indeksde yerlesen "characteri" tapiriq.
// console.log(testString.charCodeAt(1)); 
// //result = 101
// // Elementin Unicode deyerini cixardir.

// -------------------------------------------------- //

// let testString = "Salam Aleykum"
// console.log(testString.indexOf("al")); 
// // result = 1;
// // Elementin, necenci indeksden basladigini bildirir,
// // ilkini nezere alir.
// console.log(testString.lastIndexOf("a")); 
// // result = 3;
// // Elementin islendiyi sonuncu movqeyi, 
// // yeni indeksini cixardir.

// ------------------------------------------------- //

// let testString = "    once a red always a red  "
// console.log(testString)
// console.log(testString.trim()); 
// // Baslangicdaki ve sondaki bosluglari 
// // aradan qaldirir.

// ------------------------------------------------- //

// let testString = "ORDUBAD pustesi"
// console.log(testString.toLowerCase()); 
// // result = ordubad pustesi
// // Boyuk herfleri kiciye cevirir.
// console.log(testString.toUpperCase()); 
// // result = ORDUBAD PUSTESI
// // Kicik herfleri boyuye cevirir.

// ------------------------------------------------- //

// let testString = "Villains are made,"
// let testString2 = " not born."
// console.log(testString.concat(testString2)); 
// // result = Villains are made, not born.
// // Bir stringe, birden cox stringi birlesdirerek,
// // yeni string yaradirig.

// ------------------------------------------------- //

// let testString = "lapis lazuli"
// console.log(testString.slice(0,5)); 
// // result = lapis
// // Verilen araligi stringden kesib, 
// // yeni string qaytarir.

// ------------------------------------------------- //

// let testString = "Ati, at elemez qizildan yeher!"
// console.log(testString.replace("qizil","kristal")); 
// // result = Ati, at elemez kristaldan yeher!
// // Elementi basga bir elementle evez edirik.

// ------------------------------------------------- //

// let testString = "AK40 TO YOUR LIVER"
// console.log(testString.split(" ")); 
// // result = ['AK40', 'TO', 'YOUR', 'LIVER']
// // Sozleri, array seklinde qaytarir.
// // (burada her boslugdan bir qaytarmagini istemisik)

// ------------------------------------------------- //

// let testString = "Slaughter gang, soul snatcher"
// console.log(testString.startsWith("Slaughter")); 
// // result = true
// // Elementle baslama statusunu (true & false) qaytarir.
// console.log(testString.endsWith(".")); 
// // result = false
// // Elementle bitme statusunu (true & false) qaytarir.