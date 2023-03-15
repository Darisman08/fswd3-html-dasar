// Meminta pemain untuk memasukkan nama
const playerName = prompt('Masukkan Nama Anda?');

// Inisialisasi variabel skor
let playerScore = 0;
let computerScore = 0;

// Fungsi untuk menghasilkan pilihan komputer secara acak
function computerPlay() {
    const choices = ['batu', 'kertas', 'gunting'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Fungsi untuk menentukan hasil permainan berdasarkan pilihan pemain dan komputer
function playRound(playerSelection, computerSelection) {
    // Menentukan hasil permainan menggunakan switch statement
    switch (playerSelection) {
        case 'batu':
            switch (computerSelection) {
                case 'batu':
                    return 'seri';
                case 'kertas':
                    return 'kalah';
                case 'gunting':
                    return 'menang';
            }
            break;
        case 'kertas':
            switch (computerSelection) {
                case 'batu':
                    return 'menang';
                case 'kertas':
                    return 'seri';
                case 'gunting':
                    return 'kalah';
            }
            break;
        case 'gunting':
            switch (computerSelection) {
                case 'batu':
                    return 'kalah';
                case 'kertas':
                    return 'menang';
                case 'gunting':
                    return 'seri';
            }
            break;
        default:
            return 'invalid';
    }
}

// Fungsi untuk memainkan permainan
function game() {

    // Meminta pemain untuk memilih (dalam bentuk pop-up box)
    const playerSelection = prompt('Pilih batu, kertas, atau gunting').toLowerCase();

    // Menentukan pilihan komputer
    const computerSelection = computerPlay();

    // Menentukan hasil permainan
    const result = playRound(playerSelection, computerSelection);

    // Mengupdate skor berdasarkan hasil permainan
    if (result === 'menang') {
        playerScore++;
    } else if (result === 'kalah') {
        computerScore++;
    }

    console.log(`${playerName} ${result}! Anda Memilih ${playerSelection} dan Komputer Memilih ${computerSelection}. Nilai: ${playerName} ${playerScore} - ${computerScore} Komputer`);

    alert(`${playerName} ${result}! Anda Memilih ${playerSelection} dan Komputer Memilih ${computerSelection}. Nilai: ${playerName} ${playerScore} - ${computerScore} Komputer`);
    // Meminta pemain apakah ingin bermain lagi
    const playAgain = confirm('Apakah mau main lagi?');

    // Jika pemain memilih untuk bermain lagi, panggil fungsi game() kembali
    if (playAgain) {
        game();
    }
}

// Memulai permainan ketika halaman dimuat
game();
