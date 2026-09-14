document.addEventListener("DOMContentLoaded", function () {
    // ================= ELEMENT UTAMA =================

    const landingPage = document.getElementById("landingPage");
    const dashboardPage = document.getElementById("dashboardPage");

    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");

    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");

    const closeLogin = document.getElementById("closeLogin");
    const closeRegister = document.getElementById("closeRegister");

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    const studentName = document.getElementById("studentName");

    const algebraBtn = document.getElementById("algebraBtn");
    const geometryBtn = document.getElementById("geometryBtn");
    const solidGeometryBtn = document.getElementById("solidGeometryBtn");

    const algebraModule = document.getElementById("algebraModule");
    const geometryModule = document.getElementById("geometryModule");
    const solidGeometryModule = document.getElementById("solidGeometryModule");

    const backToDashboard = document.getElementById("backToDashboard");
    const backFromGeometry = document.getElementById("backFromGeometry");
    const backFromSolidGeometry = document.getElementById("backFromSolidGeometry");

    const infoModal = document.getElementById("infoModal");
    const closeInfo = document.getElementById("closeInfo");
    const infoOkBtn = document.getElementById("infoOkBtn");

    const infoTitle = document.getElementById("infoTitle");
    const infoDescription = document.getElementById("infoDescription");

    // ================= FUNGSI MODAL =================

    function openModal(modal) {
        if (modal) {
            modal.classList.remove("hidden");
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.add("hidden");
        }
    }

    function showInfo(title, description) {
        if (infoTitle) {
            infoTitle.textContent = title;
        }

        if (infoDescription) {
            infoDescription.textContent = description;
        }

        openModal(infoModal);
    }

    // ================= LOGIN =================

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            openModal(loginModal);
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            openModal(registerModal);
        });
    }

    if (closeLogin) {
        closeLogin.addEventListener("click", function () {
            closeModal(loginModal);
        });
    }

    if (closeRegister) {
        closeRegister.addEventListener("click", function () {
            closeModal(registerModal);
        });
    }

    if (closeInfo) {
        closeInfo.addEventListener("click", function () {
            closeModal(infoModal);
        });
    }

    if (infoOkBtn) {
        infoOkBtn.addEventListener("click", function () {
            closeModal(infoModal);
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            closeModal(loginModal);
        }

        if (event.target === registerModal) {
            closeModal(registerModal);
        }

        if (event.target === infoModal) {
            closeModal(infoModal);
        }
    });

    // ================= PINDAH KE DASHBOARD =================

    function showDashboard(name) {
        if (landingPage) {
            landingPage.classList.add("hidden");
        }

        if (dashboardPage) {
            dashboardPage.classList.remove("hidden");
        }

        if (studentName && name) {
            studentName.textContent = name;
        }

        closeModal(loginModal);
        closeModal(registerModal);
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameInput = document.getElementById("loginName");

            if (nameInput && nameInput.value.trim() !== "") {
                showDashboard(nameInput.value.trim());
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameInput = document.getElementById("registerName");

            if (nameInput && nameInput.value.trim() !== "") {
                showDashboard(nameInput.value.trim());
            }
        });
    }

    // ================= FUNGSI SEMBUNYIKAN SEMUA HALAMAN =================

    function hideAllPages() {
        if (dashboardPage) {
            dashboardPage.classList.add("hidden");
        }

        if (algebraModule) {
            algebraModule.classList.add("hidden");
        }

        if (geometryModule) {
            geometryModule.classList.add("hidden");
        }

        if (solidGeometryModule) {
            solidGeometryModule.classList.add("hidden");
        }
    }

    // ================= MODUL ALJABAR =================

    function openAlgebraModule() {
        hideAllPages();

        if (algebraModule) {
            algebraModule.classList.remove("hidden");
        }
    }

    if (algebraBtn) {
        algebraBtn.addEventListener("click", openAlgebraModule);
    }

    if (backToDashboard) {
        backToDashboard.addEventListener("click", function () {
            hideAllPages();

            if (dashboardPage) {
                dashboardPage.classList.remove("hidden");
            }
        });
    }

    // ================= MODUL GEOMETRI =================

    function openGeometryModule() {
        hideAllPages();

        if (geometryModule) {
            geometryModule.classList.remove("hidden");
        }
    }

    if (geometryBtn) {
        geometryBtn.addEventListener("click", openGeometryModule);
    }

    if (backFromGeometry) {
        backFromGeometry.addEventListener("click", function () {
            hideAllPages();

            if (dashboardPage) {
                dashboardPage.classList.remove("hidden");
            }
        });
    }

    // ================= TOMBOL TAMBAHAN =================

    const achievementBtn = document.getElementById("achievementBtn");
    const rankingBtn = document.getElementById("rankingBtn");
    const profileBtn = document.getElementById("profileBtn");

    if (achievementBtn) {
        achievementBtn.addEventListener("click", function () {
            showInfo(
                "Pencapaian",
                "Fitur pencapaian sedang dipersiapkan."
            );
        });
    }

    if (rankingBtn) {
        rankingBtn.addEventListener("click", function () {
            showInfo(
                "Peringkat",
                "Fitur peringkat sedang dipersiapkan."
            );
        });
    }

    if (profileBtn) {
        profileBtn.addEventListener("click", function () {
            showInfo(
                "Profil Siswa",
                "Informasi profil siswa akan tersedia pada pengembangan berikutnya."
            );
        });
    }
});

// =========================
// MODUL BANGUN RUANG
// =========================

// Tombol bentuk bangun ruang
const solidCubeBtn = document.getElementById("solidCubeBtn");
const solidBlockBtn = document.getElementById("solidBlockBtn");
const solidCylinderBtn = document.getElementById("solidCylinderBtn");
const solidConeBtn = document.getElementById("solidConeBtn");
const solidSphereBtn = document.getElementById("solidSphereBtn");
const solidPrismBtn = document.getElementById("solidPrismBtn");

// Area konten bangun ruang
const solidContent = document.getElementById("solidContent");

// Membuka modul Bangun Ruang
if (solidGeometryBtn) {
    solidGeometryBtn.addEventListener("click", function () {
        if (dashboardPage) {
            dashboardPage.classList.add("hidden");
        }

        if (solidGeometryModule) {
            solidGeometryModule.classList.remove("hidden");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Kembali ke dashboard
if (backFromSolidGeometry) {
    backFromSolidGeometry.addEventListener("click", function () {
        if (solidGeometryModule) {
            solidGeometryModule.classList.add("hidden");
        }

        if (dashboardPage) {
            dashboardPage.classList.remove("hidden");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Fungsi menampilkan materi bangun ruang
function showSolidMaterial(title, content) {
    if (!solidContent) {
        return;
    }

    solidContent.innerHTML = `
        <div class="solid-material">
            <h3>${title}</h3>
            ${content}
        </div>
    `;
}

// Kubus
if (solidCubeBtn) {
    solidCubeBtn.addEventListener("click", function () {
        showSolidMaterial(
            "Kubus",
            `
            <p>
                Kubus adalah bangun ruang yang memiliki 6 sisi berbentuk persegi
                dengan ukuran yang sama.
            </p>

            <div class="formula-box">
                <strong>Rumus volume:</strong>
                <p>V = s × s × s</p>

                <strong>Rumus luas permukaan:</strong>
                <p>L = 6 × s²</p>
            </div>

            <label for="cubeSide">Masukkan panjang sisi (cm):</label>
            <input type="number" id="cubeSide" min="0" placeholder="Contoh: 5">

            <button id="calculateCubeBtn" class="calculate-btn">
                Hitung
            </button>

            <div id="cubeResult" class="calculation-result"></div>
            `
        );

        const calculateCubeBtn = document.getElementById("calculateCubeBtn");

        if (calculateCubeBtn) {
            calculateCubeBtn.addEventListener("click", function () {
                const side = Number(document.getElementById("cubeSide").value);
                const result = document.getElementById("cubeResult");

                if (side <= 0) {
                    result.innerHTML = "Masukkan panjang sisi yang valid.";
                    return;
                }

                const volume = side * side * side;
                const surfaceArea = 6 * side * side;

                result.innerHTML = `
                    <p>Volume kubus = <strong>${volume} cm³</strong></p>
                    <p>Luas permukaan = <strong>${surfaceArea} cm²</strong></p>
                `;
            });
        }
    });
}

// Balok
if (solidBlockBtn) {
    solidBlockBtn.addEventListener("click", function () {
        showSolidMaterial(
            "Balok",
            `
            <p>
                Balok adalah bangun ruang yang memiliki 6 sisi berbentuk persegi
                panjang.
            </p>

            <div class="formula-box">
                <strong>Rumus volume:</strong>
                <p>V = p × l × t</p>

                <strong>Rumus luas permukaan:</strong>
                <p>L = 2 × (p × l + p × t + l × t)</p>
            </div>

            <label for="blockLength">Panjang (cm):</label>
            <input type="number" id="blockLength" min="0" placeholder="Contoh: 8">

            <label for="blockWidth">Lebar (cm):</label>
            <input type="number" id="blockWidth" min="0" placeholder="Contoh: 4">

            <label for="blockHeight">Tinggi (cm):</label>
            <input type="number" id="blockHeight" min="0" placeholder="Contoh: 3">

            <button id="calculateBlockBtn" class="calculate-btn">
                Hitung
            </button>

            <div id="blockResult" class="calculation-result"></div>
            `
        );

        const calculateBlockBtn = document.getElementById("calculateBlockBtn");

        if (calculateBlockBtn) {
            calculateBlockBtn.addEventListener("click", function () {
                const length = Number(document.getElementById("blockLength").value);
                const width = Number(document.getElementById("blockWidth").value);
                const height = Number(document.getElementById("blockHeight").value);
                const result = document.getElementById("blockResult");

                if (length <= 0 || width <= 0 || height <= 0) {
                    result.innerHTML = "Semua ukuran harus lebih dari 0.";
                    return;
                }

                const volume = length * width * height;
                const surfaceArea =
                    2 * (
                        length * width +
                        length * height +
                        width * height
                    );

                result.innerHTML = `
                    <p>Volume balok = <strong>${volume} cm³</strong></p>
                    <p>Luas permukaan = <strong>${surfaceArea} cm²</strong></p>
                `;
            });
        }
    });
}

// Tabung
if (solidCylinderBtn) {
    solidCylinderBtn.addEventListener("click", function () {
        showSolidMaterial(
            "Tabung",
            `
            <p>
                Tabung adalah bangun ruang yang memiliki dua sisi berbentuk
                lingkaran dan satu sisi selimut.
            </p>

            <div class="formula-box">
                <strong>Rumus volume:</strong>
                <p>V = π × r² × t</p>

                <strong>Rumus luas permukaan:</strong>
                <p>L = 2 × π × r × (r + t)</p>
            </div>

            <label for="cylinderRadius">Jari-jari (cm):</label>
            <input type="number" id="cylinderRadius" min="0" placeholder="Contoh: 7">

            <label for="cylinderHeight">Tinggi (cm):</label>
            <input type="number" id="cylinderHeight" min="0" placeholder="Contoh: 10">

            <button id="calculateCylinderBtn" class="calculate-btn">
                Hitung
            </button>

            <div id="cylinderResult" class="calculation-result"></div>
            `
        );

        const calculateCylinderBtn =
            document.getElementById("calculateCylinderBtn");

        if (calculateCylinderBtn) {
            calculateCylinderBtn.addEventListener("click", function () {
                const radius = Number(
                    document.getElementById("cylinderRadius").value
                );

                const height = Number(
                    document.getElementById("cylinderHeight").value
                );

                const result = document.getElementById("cylinderResult");

                if (radius <= 0 || height <= 0) {
                    result.innerHTML = "Masukkan ukuran yang valid.";
                    return;
                }

                const volume = Math.PI * radius * radius * height;
                const surfaceArea =
                    2 * Math.PI * radius * (radius + height);

                result.innerHTML = `
                    <p>Volume tabung = <strong>${volume.toFixed(2)} cm³</strong></p>
                    <p>Luas permukaan = <strong>${surfaceArea.toFixed(2)} cm²</strong></p>
                `;
            });
        }
    });
}

// Kerucut
if (solidConeBtn) {
    solidConeBtn.addEventListener("click", function () {
        showSolidMaterial(
            "Kerucut",
            `
            <p>
                Kerucut adalah bangun ruang yang memiliki satu alas berbentuk
                lingkaran dan satu titik puncak.
            </p>

            <div class="formula-box">
                <strong>Rumus volume:</strong>
                <p>V = ⅓ × π × r² × t</p>
            </div>

            <label for="coneRadius">Jari-jari (cm):</label>
            <input type="number" id="coneRadius" min="0" placeholder="Contoh: 6">

            <label for="coneHeight">Tinggi (cm):</label>
            <input type="number" id="coneHeight" min="0" placeholder="Contoh: 8">

            <button id="calculateConeBtn" class="calculate-btn">
                Hitung
            </button>

            <div id="coneResult" class="calculation-result"></div>
            `
        );

        const calculateConeBtn =
            document.getElementById("calculateConeBtn");

        if (calculateConeBtn) {
            calculateConeBtn.addEventListener("click", function () {
                const radius = Number(
                    document.getElementById("coneRadius").value
                );

                const height = Number(
                    document.getElementById("coneHeight").value
                );

                const result = document.getElementById("coneResult");

                if (radius <= 0 || height <= 0) {
                    result.innerHTML = "Masukkan ukuran yang valid.";
                    return;
                }

                const volume =
                    (1 / 3) * Math.PI * radius * radius * height;

                result.innerHTML = `
                    <p>Volume kerucut = <strong>${volume.toFixed(2)} cm³</strong></p>
                `;
            });
        }
    });
}

// Bola
if (solidSphereBtn) {
    solidSphereBtn.addEventListener("click", function () {
        showSolidMaterial(
            "Bola",
            `
            <p>
                Bola adalah bangun ruang yang seluruh permukaannya memiliki
                jarak yang sama terhadap titik pusat.
            </p>

            <div class="formula-box">
                <strong>Rumus volume:</strong>
                <p>V = ⁴⁄₃ × π × r³</p>

                <strong>Rumus luas permukaan:</strong>
                <p>L = 4 × π × r²</p>
            </div>

            <label for="sphereRadius">Jari-jari (cm):</label>
            <input type="number" id="sphereRadius" min="0" placeholder="Contoh: 7">

            <button id="calculateSphereBtn" class="calculate-btn">
                Hitung
            </button>

            <div id="sphereResult" class="calculation-result"></div>
            `
        );

        const calculateSphereBtn =
            document.getElementById("calculateSphereBtn");

        if (calculateSphereBtn) {
            calculateSphereBtn.addEventListener("click", function () {
                const radius = Number(
                    document.getElementById("sphereRadius").value
                );

                const result = document.getElementById("sphereResult");

                if (radius <= 0) {
                    result.innerHTML = "Masukkan jari-jari yang valid.";
                    return;
                }

                const volume =
                    (4 / 3) * Math.PI * radius * radius * radius;

                const surfaceArea =
                    4 * Math.PI * radius * radius;

                result.innerHTML = `
                    <p>Volume bola = <strong>${volume.toFixed(2)} cm³</strong></p>
                    <p>Luas permukaan = <strong>${surfaceArea.toFixed(2)} cm²</strong></p>
                `;
            });
        }
    });
}

// Prisma
if (solidPrismBtn) {
    solidPrismBtn.addEventListener("click", function () {
        showSolidMaterial(
            "Prisma",
            `
            <p>
                Prisma adalah bangun ruang yang memiliki dua sisi sejajar
                dan kongruen sebagai alas dan tutup.
            </p>

            <div class="formula-box">
                <strong>Rumus volume:</strong>
                <p>V = luas alas × tinggi prisma</p>
            </div>

            <label for="prismBaseArea">Luas alas (cm²):</label>
            <input type="number" id="prismBaseArea" min="0" placeholder="Contoh: 24">

            <label for="prismHeight">Tinggi prisma (cm):</label>
            <input type="number" id="prismHeight" min="0" placeholder="Contoh: 10">

            <button id="calculatePrismBtn" class="calculate-btn">
                Hitung
            </button>

            <div id="prismResult" class="calculation-result"></div>
            `
        );

        const calculatePrismBtn =
            document.getElementById("calculatePrismBtn");

        if (calculatePrismBtn) {
            calculatePrismBtn.addEventListener("click", function () {
                const baseArea = Number(
                    document.getElementById("prismBaseArea").value
                );

                const height = Number(
                    document.getElementById("prismHeight").value
                );

                const result = document.getElementById("prismResult");

                if (baseArea <= 0 || height <= 0) {
                    result.innerHTML = "Masukkan ukuran yang valid.";
                    return;
                }

                const volume = baseArea * height;

                result.innerHTML = `
                    <p>Volume prisma = <strong>${volume} cm³</strong></p>
                `;
            });
        }
    });
}

/* =========================
   KUIS BANGUN RUANG
========================= */

document.addEventListener("DOMContentLoaded", () => {
    const solidQuizPage = document.getElementById("solidQuizPage");
    const backFromSolidQuiz = document.getElementById("backFromSolidQuiz");
    const checkSolidQuiz = document.getElementById("checkSolidQuiz");
    const resetSolidQuiz = document.getElementById("resetSolidQuiz");
    const solidQuizResult = document.getElementById("solidQuizResult");
    const solidQuizScore = document.getElementById("solidQuizScore");
    const solidQuizMessage = document.getElementById("solidQuizMessage");

    const solidQuizAnswers = {
        solidQ1: "C",
        solidQ2: "C",
        solidQ3: "B",
        solidQ4: "C",
        solidQ5: "B"
    };

    const solidQuizExplanations = {
        solidQ1: {
            correct: "Benar! Volume kubus = s³ = 6³ = 216 cm³.",
            wrong: "Jawaban yang benar adalah C. Volume kubus = s³ = 6³ = 216 cm³."
        },
        solidQ2: {
            correct: "Benar! Volume balok = p × l × t = 10 × 5 × 4 = 200 cm³.",
            wrong: "Jawaban yang benar adalah C. Volume balok = 10 × 5 × 4 = 200 cm³."
        },
        solidQ3: {
            correct: "Benar! Rumus volume tabung adalah V = π × r² × t.",
            wrong: "Jawaban yang benar adalah B, yaitu V = π × r² × t."
        },
        solidQ4: {
            correct: "Benar! Luas permukaan bola = 4 × π × r² = 4 × 3,14 × 3² = 113,04 cm².",
            wrong: "Jawaban yang benar adalah C. Luas permukaan bola = 4 × 3,14 × 9 = 113,04 cm²."
        },
        solidQ5: {
            correct: "Benar! Volume limas = ⅓ × luas alas × tinggi = ⅓ × 24 × 10 = 80 cm³.",
            wrong: "Jawaban yang benar adalah A. Volume limas = ⅓ × 24 × 10 = 80 cm³."
        }
    };

    if (checkSolidQuiz) {
        checkSolidQuiz.addEventListener("click", () => {
            let score = 0;
            let answeredQuestions = 0;

            Object.keys(solidQuizAnswers).forEach((questionName, index) => {
                const selectedAnswer = document.querySelector(
                    `input[name="${questionName}"]:checked`
                );

                const explanation = document.getElementById(
                    `solidExplanation${index + 1}`
                );

                explanation.classList.remove("correct", "wrong");

                if (selectedAnswer) {
                    answeredQuestions++;

                    if (selectedAnswer.value === solidQuizAnswers[questionName]) {
                        score += 20;
                        explanation.textContent =
                            "✓ " + solidQuizExplanations[questionName].correct;
                        explanation.classList.add("correct");
                    } else {
                        explanation.textContent =
                            "✗ " + solidQuizExplanations[questionName].wrong;
                        explanation.classList.add("wrong");
                    }
                } else {
                    explanation.textContent =
                        "⚠ Kamu belum memilih jawaban. " +
                        solidQuizExplanations[questionName].wrong;
                    explanation.classList.add("wrong");
                }
            });

            solidQuizScore.textContent = `Nilai: ${score}/100`;
            // Simpan nilai kuis ke browser
            localStorage.setItem("solidQuizScore", score);

            // Perbarui progress Bangun Ruang
            updateSolidProgress(score);

            if (score === 100) {
                solidQuizMessage.textContent =
                    "Luar biasa! Semua jawabanmu benar. 🎉";
            } else if (score >= 60) {
                solidQuizMessage.textContent =
                    "Bagus! Terus berlatih agar hasilnya semakin baik. 💪";
            } else {
                solidQuizMessage.textContent =
                    "Jangan menyerah! Pelajari kembali materinya dan coba lagi. 📚";
            }

            solidQuizResult.classList.add("show");

            solidQuizResult.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });
    }

    if (resetSolidQuiz) {
        resetSolidQuiz.addEventListener("click", () => {
            document.getElementById("solidQuizForm").reset();

            for (let i = 1; i <= 5; i++) {
                const explanation = document.getElementById(
                    `solidExplanation${i}`
                );

                explanation.textContent = "";
                explanation.classList.remove("correct", "wrong");
            }

            solidQuizResult.classList.remove("show");
        });
    }

    if (backFromSolidQuiz) {
        backFromSolidQuiz.addEventListener("click", () => {
            if (solidQuizPage) {
                solidQuizPage.classList.remove("active");
            }

            const solidGeometryPage =
                document.getElementById("solidGeometryModule");

            if (solidGeometryPage) {
                solidGeometryPage.classList.add("active");
            }
        });
    }
});

const openSolidQuiz = document.getElementById("openSolidQuiz");

if (openSolidQuiz) {
    openSolidQuiz.addEventListener("click", () => {
        const solidGeometryModule =
            document.getElementById("solidGeometryModule");

        const solidQuizPage =
            document.getElementById("solidQuizPage");

        if (solidGeometryModule) {
            solidGeometryModule.classList.add("hidden");
        }

        if (solidQuizPage) {
            solidQuizPage.classList.remove("hidden");
        }
    });
}

const backFromSolidQuiz =
    document.getElementById("backFromSolidQuiz");

if (backFromSolidQuiz) {
    backFromSolidQuiz.addEventListener("click", () => {
        const solidGeometryModule =
            document.getElementById("solidGeometryModule");

        const solidQuizPage =
            document.getElementById("solidQuizPage");

        if (solidQuizPage) {
            solidQuizPage.classList.add("hidden");
        }

        if (solidGeometryModule) {
            solidGeometryModule.classList.remove("hidden");
        }
    });
}

/* =========================
   PROGRESS BANGUN RUANG
========================= */

function updateSolidProgress(score) {
    const solidProgressText =
        document.getElementById("solidProgressText");

    const solidProgressFill =
        document.getElementById("solidProgressFill");

    const solidProgressStatus =
        document.getElementById("solidProgressStatus");

    if (solidProgressText) {
        solidProgressText.textContent = `${score}%`;
    }

    if (solidProgressFill) {
        solidProgressFill.style.width = `${score}%`;
    }

    if (solidProgressStatus) {
        solidProgressStatus.classList.remove(
            "completed",
            "learning"
        );

        if (score >= 100) {
            solidProgressStatus.textContent =
                "✓ Modul tuntas! Luar biasa!";
            solidProgressStatus.classList.add("completed");
        } else if (score > 0) {
            solidProgressStatus.textContent =
                "Sedang berkembang, terus berlatih!";
            solidProgressStatus.classList.add("learning");
        } else {
            solidProgressStatus.textContent =
                "Belum dikerjakan";
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const savedSolidScore =
        localStorage.getItem("solidQuizScore");

    if (savedSolidScore !== null) {
        updateSolidProgress(Number(savedSolidScore));
    }
});

/* =========================
   NAVIGASI KE KUIS BANGUN RUANG
========================= */

document.addEventListener("DOMContentLoaded", () => {
    const openSolidQuiz =
        document.getElementById("openSolidQuiz");

    const solidGeometryModule =
        document.getElementById("solidGeometryModule");

    const solidQuizPage =
        document.getElementById("solidQuizPage");

    const backFromSolidQuiz =
        document.getElementById("backFromSolidQuiz");

    if (openSolidQuiz) {
        openSolidQuiz.addEventListener("click", () => {
            if (solidGeometryModule) {
                solidGeometryModule.classList.add("hidden");
            }

            if (solidQuizPage) {
                solidQuizPage.classList.remove("hidden");
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    if (backFromSolidQuiz) {
        backFromSolidQuiz.addEventListener("click", () => {
            if (solidQuizPage) {
                solidQuizPage.classList.add("hidden");
            }

            if (solidGeometryModule) {
                solidGeometryModule.classList.remove("hidden");
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

// =========================
// HITUNG BANGUN RUANG
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // KUBUS
    const calculateCube = document.getElementById("calculateCube");

    if (calculateCube) {
        calculateCube.addEventListener("click", function () {
            const side = Number(document.getElementById("cubeSide").value);
            const result = document.getElementById("cubeResult");

            if (side <= 0 || isNaN(side)) {
                result.textContent = "Masukkan panjang rusuk yang valid.";
                return;
            }

            const volume = side * side * side;
            const surfaceArea = 6 * side * side;

            result.innerHTML = `
                <p>Volume kubus = <strong>${volume} cm³</strong></p>
                <p>Luas permukaan = <strong>${surfaceArea} cm²</strong></p>
            `;
        });
    }


    // BALOK
    const calculateBlock = document.getElementById("calculateBlock");

    if (calculateBlock) {
        calculateBlock.addEventListener("click", function () {
            const length = Number(document.getElementById("blockLength").value);
            const width = Number(document.getElementById("blockWidth").value);
            const height = Number(document.getElementById("blockHeight").value);
            const result = document.getElementById("blockResult");

            if (length <= 0 || width <= 0 || height <= 0) {
                result.textContent = "Semua ukuran harus lebih dari 0.";
                return;
            }

            const volume = length * width * height;
            const surfaceArea =
                2 * (length * width + length * height + width * height);

            result.innerHTML = `
                <p>Volume balok = <strong>${volume} cm³</strong></p>
                <p>Luas permukaan = <strong>${surfaceArea} cm²</strong></p>
            `;
        });
    }


    // TABUNG
    const calculateCylinder = document.getElementById("calculateCylinder");

    if (calculateCylinder) {
        calculateCylinder.addEventListener("click", function () {
            const radius = Number(document.getElementById("cylinderRadius").value);
            const height = Number(document.getElementById("cylinderHeight").value);
            const result = document.getElementById("cylinderResult");

            if (radius <= 0 || height <= 0) {
                result.textContent = "Masukkan ukuran tabung yang valid.";
                return;
            }

            const volume = Math.PI * radius * radius * height;
            const surfaceArea =
                2 * Math.PI * radius * (radius + height);

            result.innerHTML = `
                <p>Volume tabung = <strong>${volume.toFixed(2)} cm³</strong></p>
                <p>Luas permukaan = <strong>${surfaceArea.toFixed(2)} cm²</strong></p>
            `;
        });
    }


    // KERUCUT
    const calculateCone = document.getElementById("calculateCone");

    if (calculateCone) {
        calculateCone.addEventListener("click", function () {
            const radius = Number(document.getElementById("coneRadius").value);
            const height = Number(document.getElementById("coneHeight").value);
            const slant = Number(document.getElementById("coneSlant").value);
            const result = document.getElementById("coneResult");

            if (radius <= 0 || height <= 0 || slant <= 0) {
                result.textContent = "Masukkan semua ukuran kerucut dengan benar.";
                return;
            }

            const volume = (1 / 3) * Math.PI * radius * radius * height;
            const surfaceArea = Math.PI * radius * (radius + slant);

            result.innerHTML = `
                <p>Volume kerucut = <strong>${volume.toFixed(2)} cm³</strong></p>
                <p>Luas permukaan = <strong>${surfaceArea.toFixed(2)} cm²</strong></p>
            `;
        });
    }


    // BOLA
    const calculateSphere = document.getElementById("calculateSphere");

    if (calculateSphere) {
        calculateSphere.addEventListener("click", function () {
            const radius = Number(document.getElementById("sphereRadius").value);
            const result = document.getElementById("sphereResult");

            if (radius <= 0) {
                result.textContent = "Masukkan jari-jari bola yang valid.";
                return;
            }

            const volume = (4 / 3) * Math.PI * radius * radius * radius;
            const surfaceArea = 4 * Math.PI * radius * radius;

            result.innerHTML = `
                <p>Volume bola = <strong>${volume.toFixed(2)} cm³</strong></p>
                <p>Luas permukaan = <strong>${surfaceArea.toFixed(2)} cm²</strong></p>
            `;
        });
    }


    // PRISMA
    const calculatePrism = document.getElementById("calculatePrism");

    if (calculatePrism) {
        calculatePrism.addEventListener("click", function () {
            const baseArea = Number(document.getElementById("prismBaseArea").value);
            const height = Number(document.getElementById("prismHeight").value);
            const basePerimeter = Number(
                document.getElementById("prismBasePerimeter").value
            );
            const result = document.getElementById("prismResult");

            if (baseArea <= 0 || height <= 0 || basePerimeter <= 0) {
                result.textContent = "Masukkan semua data prisma dengan benar.";
                return;
            }

            const volume = baseArea * height;
            const surfaceArea =
                2 * baseArea + basePerimeter * height;

            result.innerHTML = `
                <p>Volume prisma = <strong>${volume.toFixed(2)} cm³</strong></p>
                <p>Luas permukaan prisma = <strong>${surfaceArea.toFixed(2)} cm²</strong></p>
            `;
        });
    }

});