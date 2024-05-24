const a = {
    mobiles: {
        Samsung: {
            SamsungA10: {
                name: "Samsung A10",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "22,000 PKR"
            },
            SamsungA20: {
                name: "Samsung A20",
                ram: "4gb",
                rom: "64gb",
                camera: "18",
                price: "28,000"
            },
            SamsungA30: {
                name: "Samsung A30",
                ram: "4gb",
                rom: "64gb",
                camera: "25",
                price: "29,000"
            }
        },
        IPhone: {
            IPhone11: {
                name: "IPhone11",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "100,000"
            },
            IPhone12: {
                name: "IPhone12",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "150,000"
            },
            IPhone13: {
                name: "IPhone13",
                ram: "6gb",
                rom: "128gb",
                camera: "24",
                price: "200,000"
            }
        },
        Oppo: {
            OppoV20: {
                name: "OppoV20",
                ram: "8gb",
                rom: "128gb",
                camera: "64",
                price: "54,999"
            },
            OppoF19: {
                name: "OppoF19",
                ram: "6gb",
                rom: "128gb",
                camera: "48",
                price: "36,999"
            },
            OppoF11: {
                name: "OppoF11",
                ram: "4gb",
                rom: "64gb",
                camera: "48",
                price: "35,999"
            }
        },
        Vivo: {
            VivoY20: {
                name: "VivoY20",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "26,999"
            },
            VivoY21: {
                name: "VivoY21",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "43,999"
            },
            VivoY55: {
                name: "VivoY55",
                ram: "8gb",
                rom: "128gb",
                camera: "50",
                price: "64,999"
            }
        }
    }
};

function searchMobile() {
    const query = document.getElementById('search').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (const brand in a.mobiles) {
        for (const model in a.mobiles[brand]) {
            const mobile = a.mobiles[brand][model];
            if (mobile.name.toLowerCase().includes(query)) {
                const result = document.createElement('div');
                result.className = 'col-md-4 result';
                result.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${mobile.name}</h5>
                            <p class="card-text"><strong>RAM:</strong> ${mobile.ram}</p>
                            <p class="card-text"><strong>ROM:</strong> ${mobile.rom}</p>
                            <p class="card-text"><strong>Camera:</strong> ${mobile.camera} MP</p>
                            <p class="card-text"><strong>Price:</strong> ${mobile.price}</p>
                        </div>
                    </div>
                `;
                resultsDiv.appendChild(result);
            }
        }
    }
}
