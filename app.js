const workoutTemplates = {
  "Back & Traps": [
    ["Lat Pulldown", "https://www.youtube.com/results?search_query=lat+pulldown+proper+form", "4 sets / 8-12 reps"],
    ["Seated Cable Row", "https://www.youtube.com/results?search_query=seated+cable+row+proper+form", "4 sets / 8-12 reps"],
    ["Single-Arm Dumbbell Row", "https://www.youtube.com/results?search_query=single+arm+dumbbell+row+proper+form", "3 sets / 10 reps each side"],
    ["Shrugs", "https://www.youtube.com/results?search_query=dumbbell+shrugs+proper+form", "4 sets / 10-15 reps"],
    ["Face Pulls", "https://www.youtube.com/results?search_query=face+pull+proper+form", "3 sets / 12-15 reps"]
  ],
  "Lats & Biceps": [
    ["Pull-Ups or Assisted Pull-Ups", "https://www.youtube.com/results?search_query=pull+up+proper+form", "4 sets"],
    ["Close-Grip Pulldown", "https://www.youtube.com/results?search_query=close+grip+lat+pulldown+proper+form", "4 sets / 10-12 reps"],
    ["Straight-Arm Pulldown", "https://www.youtube.com/results?search_query=straight+arm+pulldown+proper+form", "3 sets / 12-15 reps"],
    ["EZ Bar Curl", "https://www.youtube.com/results?search_query=ez+bar+curl+proper+form", "4 sets / 8-12 reps"],
    ["Hammer Curl", "https://www.youtube.com/results?search_query=hammer+curl+proper+form", "3 sets / 10-12 reps"]
  ],
  "Chest & Triceps": [
    ["Bench Press", "https://www.youtube.com/results?search_query=bench+press+proper+form", "4 sets / 6-10 reps"],
    ["Incline Dumbbell Press", "https://www.youtube.com/results?search_query=incline+dumbbell+press+proper+form", "4 sets / 8-10 reps"],
    ["Cable Fly", "https://www.youtube.com/results?search_query=cable+fly+proper+form", "3 sets / 12-15 reps"],
    ["Tricep Pushdown", "https://www.youtube.com/results?search_query=tricep+pushdown+proper+form", "4 sets / 10-12 reps"],
    ["Overhead Tricep Extension", "https://www.youtube.com/results?search_query=overhead+tricep+extension+proper+form", "3 sets / 10-12 reps"]
  ],
  "Shoulders": [
    ["Overhead Press", "https://www.youtube.com/results?search_query=overhead+press+proper+form", "4 sets / 6-10 reps"],
    ["Lateral Raises", "https://www.youtube.com/results?search_query=lateral+raise+proper+form", "4 sets / 12-15 reps"],
    ["Rear Delt Fly", "https://www.youtube.com/results?search_query=rear+delt+fly+proper+form", "3 sets / 12-15 reps"],
    ["Arnold Press", "https://www.youtube.com/results?search_query=arnold+press+proper+form", "3 sets / 8-10 reps"],
    ["Cable Upright Row", "https://www.youtube.com/results?search_query=cable+upright+row+proper+form", "3 sets / 10-12 reps"]
  ],
  "Legs": [
    ["Squat", "https://www.youtube.com/results?search_query=squat+proper+form", "4 sets / 6-10 reps"],
    ["Leg Press", "https://www.youtube.com/results?search_query=leg+press+proper+form", "4 sets / 10-12 reps"],
    ["Romanian Deadlift", "https://www.youtube.com/results?search_query=romanian+deadlift+proper+form", "4 sets / 8-10 reps"],
    ["Walking Lunges", "https://www.youtube.com/results?search_query=walking+lunge+proper+form", "3 sets"],
    ["Calf Raises", "https://www.youtube.com/results?search_query=calf+raise+proper+form", "4 sets / 12-20 reps"]
  ],
  "Push Day": [
    ["Bench Press", "https://www.youtube.com/results?search_query=bench+press+proper+form", "4 sets / 6-10 reps"],
    ["Incline Dumbbell Press", "https://www.youtube.com/results?search_query=incline+dumbbell+press+proper+form", "4 sets / 8-10 reps"],
    ["Overhead Press", "https://www.youtube.com/results?search_query=overhead+press+proper+form", "3 sets / 8-10 reps"],
    ["Lateral Raises", "https://www.youtube.com/results?search_query=lateral+raise+proper+form", "4 sets / 12-15 reps"],
    ["Tricep Pushdowns", "https://www.youtube.com/results?search_query=tricep+pushdown+proper+form", "4 sets / 10-12 reps"]
  ],
  "Pull Day": [
    ["Deadlift", "https://www.youtube.com/results?search_query=deadlift+proper+form", "4 sets / 4-6 reps"],
    ["Pull-Ups", "https://www.youtube.com/results?search_query=pull+up+proper+form", "4 sets"],
    ["Barbell Row", "https://www.youtube.com/results?search_query=barbell+row+proper+form", "4 sets / 8-10 reps"],
    ["Cable Row", "https://www.youtube.com/results?search_query=cable+row+proper+form", "3 sets / 10-12 reps"],
    ["Hammer Curl", "https://www.youtube.com/results?search_query=hammer+curl+proper+form", "3 sets / 10-12 reps"]
  ],
  "Power & Strength": [
    ["Heavy Squat", "https://www.youtube.com/results?search_query=heavy+squat+proper+form", "5 sets / 3-5 reps"],
    ["Heavy Bench Press", "https://www.youtube.com/results?search_query=bench+press+proper+form", "5 sets / 3-5 reps"],
    ["Deadlift", "https://www.youtube.com/results?search_query=deadlift+proper+form", "5 sets / 3-5 reps"],
    ["Farmer Carries", "https://www.youtube.com/results?search_query=farmer+carry+proper+form", "4 rounds"],
    ["Sled Push", "https://www.youtube.com/results?search_query=sled+push+proper+form", "6 rounds"]
  ],
  "HIIT Conditioning": [
    ["Battle Ropes", "https://www.youtube.com/results?search_query=battle+ropes+workout", "6 rounds / 30 seconds"],
    ["Burpees", "https://www.youtube.com/results?search_query=burpee+proper+form", "5 rounds / 10 reps"],
    ["Assault Bike", "https://www.youtube.com/results?search_query=assault+bike+hiit+workout", "10 rounds / 20 sec hard"],
    ["Box Jumps", "https://www.youtube.com/results?search_query=box+jump+proper+form", "4 sets / 10 reps"],
    ["Sled Push Intervals", "https://www.youtube.com/results?search_query=sled+push+intervals", "6 rounds"]
  ],
  "Active Recovery": [
    ["Mobility Stretching", "https://www.youtube.com/results?search_query=full+body+mobility+routine", "15-20 minutes"],
    ["Light Walk", "https://www.youtube.com/results?search_query=walking+for+fat+loss", "20-45 minutes"],
    ["Foam Rolling", "https://www.youtube.com/results?search_query=foam+rolling+routine", "10 minutes"]
  ]
};

const absTemplate = [
  ["Hanging Knee Raises", "https://www.youtube.com/results?search_query=hanging+knee+raise+proper+form", "3 sets / 10-15 reps"],
  ["Cable Crunches", "https://www.youtube.com/results?search_query=cable+crunch+proper+form", "3 sets / 12-15 reps"],
  ["Plank", "https://www.youtube.com/results?search_query=plank+proper+form", "3 rounds / 30-60 seconds"],
  ["Decline Sit-Ups", "https://www.youtube.com/results?search_query=decline+sit+up+proper+form", "3 sets / 10-15 reps"],
  ["Russian Twists", "https://www.youtube.com/results?search_query=russian+twist+proper+form", "3 sets / 20 twists"],
  ["Bicycle Crunches", "https://www.youtube.com/results?search_query=bicycle+crunch+proper+form", "3 sets / 20 reps"],
  ["Ab Wheel Rollouts", "https://www.youtube.com/results?search_query=ab+wheel+rollout+proper+form", "3 sets / 8-12 reps"],
  ["Reverse Crunches", "https://www.youtube.com/results?search_query=reverse+crunch+proper+form", "3 sets / 12-15 reps"],
  ["Toe Touches", "https://www.youtube.com/results?search_query=toe+touch+crunch+proper+form", "3 sets / 15-20 reps"]
];

const defaultTasks = [
  {text:"Review top goals", category:"development", done:false},
  {text:"Read or listen to personal development for 20 minutes", category:"development", done:false},
  {text:"Journal / daily reflection", category:"development", done:false},
  {text:"Review finances or budget", category:"development", done:false},
  {text:"Plan tomorrow before bed", category:"work", done:false}
];

let state = JSON.parse(localStorage.getItem("ironTherapyCorrectedFullV1") || "{}");
let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let selectedDate = formatDate(today);

function formatDate(d){ return d.toISOString().slice(0,10); }
function dateKey(y,m,d){ return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`; }
function save(){ localStorage.setItem("ironTherapyCorrectedFullV1", JSON.stringify(state)); renderCalendar(); updateSummary(); }

function makeExercise(item){
  return {name:item[0], link:item[1], sets:[{reps:"",weight:""},{reps:"",weight:""},{reps:"",weight:""}], complete:false, notes:item[2] || ""};
}

function getDayData(key){
  if(!state[key]){
    state[key] = {
      selectedWorkout:"",
      fitnessPhoto:{photo:"",notes:""},
      fitness: [],
      absEnabled:false,
      abs: absTemplate.map(makeExercise),
      cardio:{enabled:false,type:"",duration:"",distance:"",calories:"",notes:""},
      meals: [],
      goals:{calories:2200, protein:180, carbs:180, fat:70, water:100},
      tasks: JSON.parse(JSON.stringify(defaultTasks)),
      reflection:{wentWell:"", needsImprovement:"", tomorrowFocus:"", energy:"", stress:""}
    };
  }
  return state[key];
}

function setupYearSelect(){
  const select = document.getElementById("yearSelect");
  select.innerHTML = "";
  for(let y=today.getFullYear()-1; y<=today.getFullYear()+5; y++){
    const opt=document.createElement("option"); opt.value=y; opt.textContent=y; select.appendChild(opt);
  }
  select.value=currentYear;
  select.onchange=()=>{currentYear=parseInt(select.value); currentMonth=0; selectedDate=dateKey(currentYear,0,1); renderAll();}
}

function renderCalendar(){
  const cal=document.getElementById("calendar");
  cal.innerHTML="";
  document.getElementById("monthTitle").textContent = new Date(currentYear,currentMonth,1).toLocaleString(undefined,{month:"long",year:"numeric"});
  const firstDay = new Date(currentYear,currentMonth,1).getDay();
  const daysInMonth = new Date(currentYear,currentMonth+1,0).getDate();

  for(let i=0;i<firstDay;i++){
    const blank=document.createElement("div");
    blank.className="day muted";
    cal.appendChild(blank);
  }

  for(let d=1; d<=daysInMonth; d++){
    const key = dateKey(currentYear,currentMonth,d);
    const div=document.createElement("div");
    div.className="day";
    if(key===selectedDate) div.classList.add("selected");
    div.innerHTML = `<strong>${d}</strong><div class="badges"><span class="badge fit"></span><span class="badge nut"></span><span class="badge task"></span></div>`;
    const data = state[key];
    if(data){
      const badges=div.querySelectorAll(".badge");
      if(data.fitnessPhoto?.photo || data.fitness?.some(e=>e.complete) || data.abs?.some(e=>e.complete) || data.cardio?.enabled) badges[0].classList.add("done");
      if(data.meals?.length) badges[1].classList.add("done");
      if(data.tasks?.some(t=>t.done)) badges[2].classList.add("done");
    }
    div.onclick=()=>{selectedDate=key; renderAll();}
    cal.appendChild(div);
  }
}

function setupWorkoutSelect(){
  const select=document.getElementById("workoutSelect");
  select.innerHTML = `<option value="">Select workout day...</option>` + Object.keys(workoutTemplates).map(k=>`<option value="${k}">${k}</option>`).join("");
}

function renderFitnessPhoto(){
  const data=getDayData(selectedDate);
  const input=document.getElementById("fitnessPhotoInput");
  const preview=document.getElementById("fitnessPhotoPreview");
  const notes=document.getElementById("fitnessPhotoNotes");
  input.value="";
  if(data.fitnessPhoto.photo){preview.src=data.fitnessPhoto.photo; preview.style.display="block";} else {preview.removeAttribute("src"); preview.style.display="none";}
  notes.value=data.fitnessPhoto.notes || "";
  notes.oninput=()=>{data.fitnessPhoto.notes=notes.value; save();}
  input.onchange=(e)=>{
    const file=e.target.files[0]; if(!file) return;
    const reader=new FileReader();
    reader.onload=()=>{data.fitnessPhoto.photo=reader.result; save(); renderFitnessPhoto();}
    reader.readAsDataURL(file);
  };
}

function renderExerciseList(listEl, exercises, allowRemove=true){
  listEl.innerHTML="";
  exercises.forEach((ex, idx)=>{
    const tpl=document.getElementById("exerciseTemplate").content.cloneNode(true);
    const name=tpl.querySelector(".exercise-name");
    const link=tpl.querySelector(".exercise-link");
    const complete=tpl.querySelector(".exercise-complete");
    const notes=tpl.querySelector(".exercise-notes");
    const howto=tpl.querySelector(".howto");
    name.value=ex.name||""; link.value=ex.link||""; complete.checked=!!ex.complete; notes.value=ex.notes||"";
    howto.href=ex.link||"#";
    name.oninput=()=>{ex.name=name.value; save();}
    link.oninput=()=>{ex.link=link.value; howto.href=link.value; save();}
    complete.onchange=()=>{ex.complete=complete.checked; save();}
    notes.oninput=()=>{ex.notes=notes.value; save();}
    const removeBtn = tpl.querySelector(".remove");
    removeBtn.onclick=()=>{exercises.splice(idx,1); save(); renderFitness();}
    if(!allowRemove) removeBtn.style.display="none";
    tpl.querySelector(".add-set").onclick=()=>{ex.sets.push({reps:"",weight:""}); save(); renderFitness();}
    const sets=tpl.querySelector(".sets");
    (ex.sets||[]).forEach((s,sidx)=>{
      const row=document.createElement("div"); row.className="set-row";
      row.innerHTML=`<strong>Set ${sidx+1}</strong><label>Reps <input type="number" class="reps"></label><label>Weight <input class="weight"></label><button class="danger remove">×</button>`;
      row.querySelector(".reps").value=s.reps||"";
      row.querySelector(".weight").value=s.weight||"";
      row.querySelector(".reps").oninput=e=>{s.reps=e.target.value; save();}
      row.querySelector(".weight").oninput=e=>{s.weight=e.target.value; save();}
      row.querySelector(".remove").onclick=()=>{ex.sets.splice(sidx,1); save(); renderFitness();}
      sets.appendChild(row);
    });
    listEl.appendChild(tpl);
  });
}

function renderFitness(){
  renderFitnessPhoto();
  const data=getDayData(selectedDate);
  const workoutSelect=document.getElementById("workoutSelect");
  workoutSelect.value=data.selectedWorkout || "";
  workoutSelect.onchange=()=>{data.selectedWorkout=workoutSelect.value; save();}
  document.getElementById("loadWorkoutBtn").onclick=()=>{
    if(!workoutSelect.value) return alert("Select a workout day first.");
    if(data.fitness.length && !confirm("Replace today's current workout log with the selected workout?")) return;
    data.selectedWorkout=workoutSelect.value;
    data.fitness=workoutTemplates[workoutSelect.value].map(makeExercise);
    save(); renderFitness();
  };

  renderExerciseList(document.getElementById("exerciseList"), data.fitness);

  const absEnabled=document.getElementById("absEnabled");
  absEnabled.checked=!!data.absEnabled;
  absEnabled.onchange=()=>{data.absEnabled=absEnabled.checked; save(); renderFitness();}
  const absList=document.getElementById("absList");
  if(data.absEnabled){
    absList.style.display="block";
    renderExerciseList(absList, data.abs, true);
  } else {
    absList.style.display="none";
    absList.innerHTML="";
  }

  const cardio=data.cardio;
  const cardioEnabled=document.getElementById("cardioEnabled");
  cardioEnabled.checked=!!cardio.enabled;
  cardioEnabled.onchange=()=>{cardio.enabled=cardioEnabled.checked; save(); renderFitness();}
  const fields=document.getElementById("cardioFields");
  fields.style.display=cardio.enabled ? "grid" : "none";
  [["cardioType","type"],["cardioDuration","duration"],["cardioDistance","distance"],["cardioCalories","calories"],["cardioNotes","notes"]].forEach(([id,key])=>{
    const el=document.getElementById(id); el.value=cardio[key]||"";
    el.oninput=()=>{cardio[key]=el.value; save();}
  });
}

function renderNutrition(){
  const data=getDayData(selectedDate);
  const g=data.goals;
  ["Calories","Protein","Carbs","Fat","Water"].forEach(k=>{
    const el=document.getElementById("goal"+k);
    const key=k.toLowerCase();
    el.value=g[key]||"";
    el.oninput=()=>{g[key]=Number(el.value); save(); renderNutrition();}
  });
  const total=data.meals.reduce((a,m)=>({calories:a.calories+(+m.calories||0),protein:a.protein+(+m.protein||0),carbs:a.carbs+(+m.carbs||0),fat:a.fat+(+m.fat||0)}),{calories:0,protein:0,carbs:0,fat:0});
  document.getElementById("macroTotals").innerHTML = `<strong>Daily Total:</strong> ${total.calories}/${g.calories} cal • ${total.protein}/${g.protein}g protein • ${total.carbs}/${g.carbs}g carbs • ${total.fat}/${g.fat}g fat`;

  const list=document.getElementById("mealList"); list.innerHTML="";
  data.meals.forEach((meal,idx)=>{
    const tpl=document.getElementById("mealTemplate").content.cloneNode(true);
    const name=tpl.querySelector(".meal-name"); name.value=meal.name||"";
    const preview=tpl.querySelector(".meal-preview");
    if(meal.photo){preview.src=meal.photo; preview.style.display="block";}
    name.oninput=()=>{meal.name=name.value; save();}
    ["calories","protein","carbs","fat"].forEach(k=>{
      const inp=tpl.querySelector(".meal-"+k); inp.value=meal[k]||"";
      inp.oninput=()=>{meal[k]=Number(inp.value); save(); renderNutrition();}
    });
    const notes=tpl.querySelector(".meal-notes"); notes.value=meal.notes||""; notes.oninput=()=>{meal.notes=notes.value; save();}
    tpl.querySelector(".estimate-btn").onclick = async () => {
      alert("Estimate Macros button clicked.");

      if (!meal.photo) {
        alert("Upload a meal photo first.");
        return;
      }

      const btn = tpl.querySelector(".estimate-btn");
      const status = tpl.querySelector(".ai-status");
      const originalText = btn.textContent;

      if (status) status.textContent = "Sending meal photo to AI...";
      alert("Photo found. Sending to AI now.");
      btn.textContent = "Analyzing...";
      btn.disabled = true;

      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 30000);

        const response = await fetch("/api/analyze-meal", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ image: meal.photo, mealName: meal.name || "" }),
          signal: controller.signal
        });

        clearTimeout(timeout);

        let result;
        try {
          result = await response.json();
        } catch (jsonError) {
          throw new Error("Server did not return readable JSON. Check Vercel logs.");
        }

        if (!response.ok) {
          throw new Error(result.error || "AI request failed.");
        }

        meal.name = result.mealName || meal.name || "Meal";
        meal.calories = Number(result.calories || 0);
        meal.protein = Number(result.protein || 0);
        meal.carbs = Number(result.carbs || 0);
        meal.fat = Number(result.fat || 0);
        meal.notes = result.notes || "AI estimate. Review serving size.";

        save();
        renderNutrition();
        alert("Meal macros estimated.");
      } catch (err) {
        if (status) status.textContent = "AI failed: " + err.message;
        if (err.name === "AbortError") {
          alert("AI meal analysis timed out after 30 seconds. This usually means the Vercel/OpenAI connection is hanging. Check Vercel Function Logs.");
        } else {
          alert("AI meal analysis failed: " + err.message);
        }
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    };
    tpl.querySelector(".meal-photo").onchange=(e)=>{
      const file=e.target.files[0]; if(!file) return;
      const reader=new FileReader();
      reader.onload=()=>{meal.photo=reader.result; save(); renderNutrition();}
      reader.readAsDataURL(file);
    };
    tpl.querySelector(".remove").onclick=()=>{data.meals.splice(idx,1); save(); renderNutrition();}
    list.appendChild(tpl);
  });
}

function renderTasks(){
  const data=getDayData(selectedDate);
  const work=document.getElementById("workTasks");
  const dev=document.getElementById("developmentTasks");
  work.innerHTML=""; dev.innerHTML="";
  data.tasks.forEach((task,idx)=>{
    const tpl=document.getElementById("taskTemplate").content.cloneNode(true);
    const done=tpl.querySelector(".task-done");
    const text=tpl.querySelector(".task-text");
    const cat=tpl.querySelector(".task-category");
    done.checked=!!task.done; text.value=task.text||""; cat.value=task.category||"work";
    done.onchange=()=>{task.done=done.checked; save();}
    text.oninput=()=>{task.text=text.value; save();}
    cat.onchange=()=>{task.category=cat.value; save(); renderTasks();}
    tpl.querySelector(".remove").onclick=()=>{data.tasks.splice(idx,1); save(); renderTasks();}
    (task.category==="development"?dev:work).appendChild(tpl);
  });
  const r=data.reflection;
  ["wentWell","needsImprovement","tomorrowFocus","energy","stress"].forEach(id=>{
    const el=document.getElementById(id); el.value=r[id]||"";
    el.oninput=()=>{r[id]=el.value; save();}
  });
}

function updateSummary(){
  const data=getDayData(selectedDate);
  const fitDone=data.fitness.filter(e=>e.complete).length + (data.absEnabled ? data.abs.filter(e=>e.complete).length : 0);
  const fitTotal=data.fitness.length + (data.absEnabled ? data.abs.length : 0);
  const taskDone=data.tasks.filter(t=>t.done).length;
  const cardioText=data.cardio.enabled ? ` • Cardio: ${data.cardio.duration || "added"}` : "";
  const photoText=data.fitnessPhoto?.photo ? " • Photo added" : "";
  document.getElementById("selectedDateTitle").textContent = new Date(selectedDate+"T00:00:00").toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric",year:"numeric"});
  document.getElementById("completionSummary").textContent = `Workout: ${data.selectedWorkout || "Not selected"} • Fitness: ${fitDone}/${fitTotal}${cardioText}${photoText} • Meals: ${data.meals.length} • Tasks: ${taskDone}/${data.tasks.length}`;
  document.getElementById("statWorkout").textContent = data.selectedWorkout || "Not selected";
  document.getElementById("statMeals").textContent = data.meals.length;
  document.getElementById("statTasks").textContent = `${taskDone}/${data.tasks.length}`;
}

function renderAll(){ setupWorkoutSelect(); renderCalendar(); updateSummary(); renderFitness(); renderNutrition(); renderTasks(); }

document.getElementById("prevMonth").onclick=()=>{currentMonth--; if(currentMonth<0){currentMonth=11; currentYear--; document.getElementById("yearSelect").value=currentYear;} renderAll();}
document.getElementById("nextMonth").onclick=()=>{currentMonth++; if(currentMonth>11){currentMonth=0; currentYear++; document.getElementById("yearSelect").value=currentYear;} renderAll();}
document.querySelectorAll(".tab").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".tab,.tab-content").forEach(e=>e.classList.remove("active")); btn.classList.add("active"); document.getElementById(btn.dataset.tab).classList.add("active");});
document.getElementById("addExerciseBtn").onclick=()=>{getDayData(selectedDate).fitness.push({name:"",link:"",sets:[{reps:"",weight:""}],complete:false,notes:""}); save(); renderFitness();}
document.getElementById("addMealBtn").onclick=()=>{getDayData(selectedDate).meals.push({name:"",calories:"",protein:"",carbs:"",fat:"",notes:"",photo:""}); save(); renderNutrition();}
document.getElementById("addTaskBtn").onclick=()=>{getDayData(selectedDate).tasks.push({text:"",category:"work",done:false}); save(); renderTasks();}
document.getElementById("clearDayBtn").onclick=()=>{if(confirm("Clear this day?")){delete state[selectedDate]; save(); renderAll();}}
document.getElementById("exportBtn").onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="iron-therapy-backup.json"; a.click();}
document.getElementById("importFile").onchange=e=>{const file=e.target.files[0]; if(!file)return; const r=new FileReader(); r.onload=()=>{state=JSON.parse(r.result); save(); renderAll();}; r.readAsText(file);}
setupYearSelect(); renderAll();
