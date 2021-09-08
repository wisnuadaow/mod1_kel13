const grade = () =>{ // Arrow function
    var a = document.getElementById("nilai").value; //Membuat variabel a
    var b = 1 * a + 10; // Mengembalikan nilai
     hasil = b >=80 ? "Nilai A": // Pengkondisian dalam bentuk ternary operator
            b >=70 ? "Nilai B":
            b >=60 ? "Nilai C":
            b >=50 ? "Nilai D":
            "Nilai E";
        console.log(hasil); // Menampilkan hasil pada console
        console.log(b);
        alert(hasil);
}





