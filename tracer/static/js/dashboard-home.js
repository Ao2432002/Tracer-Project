// -------------------------------------- Show List Of Link In The SideBar -------------------------------------- //
let arrow = document.querySelectorAll(".arrow");
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

// -------------------------------------- SideBar Open & Close -------------------------------------- //
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".menu");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});


// -------------------------------------- Start Charts -------------------------------------- //
// -------------------------------------- Bar Chart For Students Count -------------------------------------- //

const years = document.querySelectorAll('.year');
const counts = document.querySelectorAll('.count');
let dataCount = [];
let labels = [];
let numAllStudents = 0;
let ratios = [];

counts.forEach(count => {
    const countValue = parseInt(count.innerHTML);
    dataCount.push(countValue);
    numAllStudents += countValue;
});

years.forEach(year => {
    labels.push(`acd ${year.innerHTML}`);
    const index = labels.length - 1;
    ratios[index] = (dataCount[index] / numAllStudents) * 100; // حساب نسبة كل فرقة بالنسبة للعدد الكلي للطلاب
});

const data = {
    labels: labels,
    datasets: [{
        label: 'Count of Students',
        data: dataCount, // Example data, replace with your data
        backgroundColor: [
            '#24184e',
            '#3b2986',
            '#4629aa',
            '#552fd3',
            '#633cef',
            '#715afa',
            '#837aff',
            '#a0a1ff',
            '#c4c7ff',
            '#dee1ff'
        ],
        borderColor: [
            '#24184e',
            '#3b2986',
            '#4629aa',
            '#552fd3',
            '#633cef',
            '#715afa',
            '#837aff',
            '#a0a1ff',
            '#c4c7ff',
            '#dee1ff'
        ],
        borderWidth: 1,
        borderRadius: 10,
    }]
};

// Configuration options
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        // تحديد سمك البار بالبكسل
        barThickness: 30, // يمكنك تعديل هذه القيمة لتناسب تصميمك
    }
};

// Create the chart
var studentsCount = new Chart(
    document.getElementById('students-count'),
    config
);

// -------------------------------------- Pie Chart For Percentage Students Count -------------------------------------- //


// Data for the chart
const ratioData = {
    labels: labels,
    datasets: [{
        label: 'Student Ratios',
        data: ratios,
        backgroundColor: [
            '#24184e',
            '#3b2986',
            '#4629aa',
            '#552fd3',
            '#633cef',
            '#715afa',
            '#837aff',
            '#a0a1ff',
            '#c4c7ff',
            '#dee1ff'
        ],
        borderColor: [
            '#24184e',
            '#3b2986',
            '#4629aa',
            '#552fd3',
            '#633cef',
            '#715afa',
            '#837aff',
            '#a0a1ff',
            '#c4c7ff',
            '#dee1ff'
        ],
        borderWidth: 1
    }]
};

// Configuration options
const ratioConfig = {
    type: 'pie',
    data: ratioData,
    options: {
        cutoutPercentage: 30, // تحديد قيمة cutout لتقليل سمك الباي
    }
};

// Create the chart
var studentsRatio = new Chart(
    document.getElementById('students-ratio'),
    ratioConfig
);

// -------------------------------------- Number of students for each section for acd year -------------------------------------- //

document.addEventListener('DOMContentLoaded', function() {
    function generateSectionAcdCharts() {
        const sectionDataElements = document.querySelectorAll('.section-data');

        sectionDataElements.forEach(sectionDataElement => {
            const year = sectionDataElement.dataset.year;
            const canvasElement = document.getElementById(`students-section-count-${year}`);
            
            if (canvasElement) {
                const sections = sectionDataElement.querySelectorAll('.section');
                const sectionCounts = sectionDataElement.querySelectorAll('.section-count');

                let sectionLabels = [];
                let sectionDataCount = [];

                sections.forEach((section, index) => {
                    sectionLabels.push(`sec ${section.innerHTML}`);
                    sectionDataCount.push(parseInt(sectionCounts[index].innerHTML));
                });

                const sectionData = {
                    labels: sectionLabels,
                    datasets: [{
                        label: `Count of Students per Section for Year ${year}`,
                        data: sectionDataCount,
                        backgroundColor: [
                            '#24184e',
                            '#3b2986',
                            '#4629aa',
                            '#552fd3',
                            '#633cef',
                            '#715afa',
                            '#837aff',
                            '#a0a1ff',
                            '#c4c7ff',
                            '#dee1ff'
                        ],
                        borderColor: [
                            '#24184e',
                            '#3b2986',
                            '#4629aa',
                            '#552fd3',
                            '#633cef',
                            '#715afa',
                            '#837aff',
                            '#a0a1ff',
                            '#c4c7ff',
                            '#dee1ff'
                        ],
                        borderWidth: 1,
                        borderRadius: 7,
                    }]
                };

                const sectionConfig = {
                    type: 'bar',
                    data: sectionData,
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        barThickness: 20
                    }
                };

                new Chart(canvasElement, sectionConfig);
            } else {
                console.error(`Canvas element with ID 'students-section-count-${year}' not found.`);
            }
        });
    }

    generateSectionAcdCharts();
});

// ------------------------------------ Circle Progress ----------------------------------- //
document.querySelectorAll('.progress-circle').forEach((progressCircle) => {
    const progressNumber = progressCircle.querySelector('.progress-number');
    const totalNumber = parseInt(progressNumber.dataset.count);
    
    let totalTime = 1000; // وقت الحركة بالميلي ثانية
    let animationStartTime = performance.now();

    function animate(time) {
        let animationDuration = time - animationStartTime;

        if (animationDuration < totalTime) {
            let currentProgress = (animationDuration / totalTime) * totalNumber;
            let percentage = (currentProgress / totalNumber) * 100;
            progressCircle.style.background = `conic-gradient(#4629aa ${percentage}%, #ededed ${percentage}% 100%)`;
            progressNumber.textContent = Math.round(currentProgress);

            requestAnimationFrame(animate);
        } else {
            progressCircle.style.background = `conic-gradient(#4629aa 100%, #ededed 100% 100%)`;
            progressNumber.textContent = totalNumber;
        }
    }

    requestAnimationFrame(animate);
});
    



let title = document.querySelector('title')
setInterval(() => {
    if (title.innerHTML !== 'Tracer') {
        title.innerHTML = 'Tracer'
    }else{
        title.innerHTML = 'Dashboard'
    }
}, 3000);