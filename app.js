const workoutTemplates = {
"Back & Traps":["Lat Pulldown","Seated Cable Row","Shrugs","Face Pulls"],
"Chest & Triceps":["Bench Press","Cable Fly","Tricep Pushdowns"],
"Legs":["Squat","Leg Press","Walking Lunges"],
"Push Day":["Bench Press","Shoulder Press","Lateral Raises"],
"Pull Day":["Deadlift","Pull-Ups","Barbell Row"],
"HIIT Conditioning":["Battle Ropes","Burpees","Assault Bike"]
};

const absExercises = [
"Hanging Knee Raises",
"Russian Twists",
"Bicycle Crunches",
"Ab Wheel Rollouts",
"Toe Touches"
];

let currentDate = new Date();
let selectedDate = new Date().toISOString().slice(0,10);

function renderCalendar(){
const calendar = document.getElementById("calendar");
calendar.innerHTML = "";

const year = currentDate.getFullYear();
const month = currentDate.getMonth();

document.getElementById("monthTitle").innerText =
new Date(year,month).toLocaleString('default',{month:'long',year:'numeric'});

const firstDay = new Date(year,month,1).getDay();
const daysInMonth = new Date(year,month+1,0).getDate();

for(let i=0;i<firstDay;i++){
const empty = document.createElement("div");
calendar.appendChild(empty);
}

for(let d=1; d<=daysInMonth; d++){
const day = document.createElement("div");
day.className = "day";
const key = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
if(key===selectedDate) day.classList.add("selected");
day.innerHTML = `<strong>${d}</strong>`;
day.onclick = ()=> {
selectedDate = key;
document.getElementById("selectedDateTitle").innerText = key;
renderCalendar();
};
calendar.appendChild(day);
}
}

function populateWorkoutSelect(){
const select = document.getElementById("workoutSelect");
select.innerHTML = '<option>Select workout...</option>';

Object.keys(workoutTemplates).forEach(workout=>{
const option = document.createElement("option");
option.value = workout;
option.innerText = workout;
select.appendChild(option);
});
}

document.querySelectorAll(".tab").forEach(tab=>{
tab.onclick = ()=>{
document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
document.querySelectorAll(".tab-content").forEach(c=>c.classList.remove("active"));
tab.classList.add("active");
document.getElementById(tab.dataset.tab).classList.add("active");
};
});

document.getElementById("loadWorkoutBtn").onclick = ()=>{
const value = document.getElementById("workoutSelect").value;
const list = document.getElementById("exerciseList");
list.innerHTML = "";

(workoutTemplates[value] || []).forEach(ex=>{
const div = document.createElement("div");
div.className = "exercise-card";
div.innerHTML = `
<h4>${ex}</h4>
<input placeholder="Set 1 reps">
<input placeholder="Set 1 weight">
<input placeholder="Set 2 reps">
<input placeholder="Set 2 weight">
<input placeholder="Set 3 reps">
<input placeholder="Set 3 weight">
`;
list.appendChild(div);
});

if(document.getElementById("absEnabled").checked){
const absDiv = document.getElementById("absList");
absDiv.innerHTML = "";
absExercises.forEach(ex=>{
const div = document.createElement("div");
div.className = "exercise-card";
div.innerHTML = `<h4>${ex}</h4>`;
absDiv.appendChild(div);
});
}
};

document.getElementById("fitnessPhotoInput").addEventListener("change",(e)=>{
const file = e.target.files[0];
if(!file) return;
const reader = new FileReader();
reader.onload = ()=>{
const img = document.getElementById("fitnessPhotoPreview");
img.src = reader.result;
img.style.display = "block";
};
reader.readAsDataURL(file);
});

document.getElementById("addMealBtn").onclick = ()=>{
const div = document.createElement("div");
div.className = "meal-card";
div.innerHTML = `
<input placeholder="Meal name">
<input type="file">
<input placeholder="Calories">
<input placeholder="Protein">
<input placeholder="Carbs">
<input placeholder="Fat">
`;
document.getElementById("mealList").appendChild(div);
};

document.getElementById("addTaskBtn").onclick = ()=>{
const div = document.createElement("div");
div.className = "task-card";
div.innerHTML = `
<input placeholder="Task">
`;
document.getElementById("taskList").appendChild(div);
};

const yearSelect = document.getElementById("yearSelect");
for(let y=2025; y<=2030; y++){
const option = document.createElement("option");
option.value = y;
option.innerText = y;
yearSelect.appendChild(option);
}

document.getElementById("prevMonth").onclick = ()=>{
currentDate.setMonth(currentDate.getMonth()-1);
renderCalendar();
};

document.getElementById("nextMonth").onclick = ()=>{
currentDate.setMonth(currentDate.getMonth()+1);
renderCalendar();
};

renderCalendar();
populateWorkoutSelect();
document.getElementById("selectedDateTitle").innerText = selectedDate;
