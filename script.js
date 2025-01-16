document.addEventListener("mousemove", (event) => {
    const flower = document.createElement("div");
    flower.className = "flower";

    // Mengatur posisi berdasarkan koordinat halaman
    flower.style.left = `${event.pageX}px`;
    flower.style.top = `${event.pageY}px`;

    document.body.appendChild(flower);

    // Menghapus bunga setelah animasi selesai
    setTimeout(() => {
        flower.remove();
    }, 1500);
});
