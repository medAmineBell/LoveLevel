/*=============== BATTERY ===============*/
initBattery()

function initBattery() {
    const batteryLiquid = document.querySelector('.battery__liquid'),
        batteryStatus = document.querySelector('.battery__status'),
        batteryPercentage = document.querySelector('.battery__percentage')


    updateBattery = () => {
        let level = 100
        let charing = false;
        batteryPercentage.innerHTML = level + '%'

        batteryLiquid.style.height = level + "%"


        if (level == 100) {
            batteryStatus.innerHTML = 'Full Loved Kissa w Amine <i class="ri-battery-2-fill green-color"></i>'
            batteryLiquid.style.height = "103%"
        } else if (level <= 49 & !charing) {
            batteryStatus.innerHTML = 'Low Love :( <i class="ri-plug-line animated-red"></i>'

        } else if (charing) {
            batteryStatus.innerHTML = 'Charing My Love... <i class="ri-flashlight-fill animated-green"></i>'

        }

        if (level <= 40) {
            batteryLiquid.classList.add('gradient-color-red')
            batteryLiquid.classList.remove('gradient-color-yellow', 'gradient-color-orange', 'gradient-color-green')
        } else if (level <= 60) {
            batteryLiquid.classList.add('gradient-color-orange')
            batteryLiquid.classList.remove('gradient-color-yellow', 'gradient-color-red', 'gradient-color-green')
        } else if (level <= 80) {
            batteryLiquid.classList.add('gradient-color-yellow')
            batteryLiquid.classList.remove('gradient-color-orange', 'gradient-color-red', 'gradient-color-green')
        } else {
            batteryLiquid.classList.add('gradient-color-green')
            batteryLiquid.classList.remove('gradient-color-orange', 'gradient-color-red', 'gradient-color-red')

        }


    }
    updateBattery()

}
