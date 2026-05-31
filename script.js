const wrapper = document.querySelector('.wrapper');
const backBtn = document.querySelector(".back-btn");
const menubtn = document.querySelector('.menu-btn');


menubtn.addEventListener('click', toggleScreen);
backBtn.addEventListener('click', toggleScreen);

function toggleScreen() {
    wrapper.classList.toggle("show-category");
}

const addTaskbtn = document.querySelector('.add-task-btn');
const addTaskform = document.querySelector('.add-task');
const blackbackdrop = document.querySelector('.black-backdrop');


const toggleAddtaskForm = () => {
    addTaskform.classList.toggle('active');
    blackbackdrop.classList.toggle('active');
    addTaskbtn.classList.toggle('active');
};

addTaskbtn.addEventListener('click', toggleAddtaskForm);
blackbackdrop.addEventListener('click', toggleAddtaskForm);



let categories = [
    {
        title: "Personal",
        img: "boy.png",
    }, {
        title: "Work",
        img: "work.png",
    }, {
        title: "Shopping",
        img: "shoping.png",
    }, {
        title: "Coding",
        img: "coding.png",
    }, {
        title: "Health",
        img: "health.png",
    }, {
        title: "Fitness",
        img: "fitnes.png",

    }, {
        title: "Finance",
        img: "finance.png",
    },
    {
        title: "Education",
        img: "education.png"
    }

];


let task = [
    {
        id: 1,
        task: "Go to Market",
        category: "Shopping",
        completed: false,
    },
    {
        id: 2,
        task: 'Read chapter one of Ikigai',
        category: "Education",
        completed: false,

    }, {
        id: 3,
        task: "Prepare a presentation for Summer vacation HW",
        category: "Work",
        completed: false,

    }, {
        id: 4,
        task: "Complete Codding challenge",
        category: "Education",
        completed: false,
    }, {
        id: 5,
        task: "Go for 30 minute walk",
        category: "Health",
        completed: false,
    }, {
        id: 6,
        task: "Do a 20 minute Streaching session",
        category: "Fitness",
        completed: false,
    }, {
        id: 7,
        task: "Watch an educational video",
        category: "Education",
        completed: false,
    }, {
        id: 8,
        task: "Review monthly expeses",
        category: "Finance",
        completed: false,
    }, {
        id: 9,
        task: "By groceries for the week",
        category: "Shopping",
        completed: false,
    }, {
        id: 10,
        task: "Review Monthly Budget",
        category: "Finance",
        completed: false,
    }, {
        id: 11,
        task: "Write a jorunal for 30 minutes",
        category: "Personal",
        completed: false,

    },
    {
        id: 12,
        task: "Attend a yoga class",
        category: "Fitness",
        completed: false,
    }, {
        id: 13,
        task: "Try a new healthy Recipie",
        category: "Health",
        completed: false,
    }, {
        id: 14,
        task: "Set up automatic bill payments",
        category: "Finance",
        completed: false,
    }, {
        id: 15,
        task: "Read about History",
        category: "Education",
        completed: false,
    }, {
        id: 16,
        task: "Review invesment portfolio",
        category: "Finance",
        completed: false,
    }, {
        id: 17,
        task: "Learn a new langugage online",
        category: "Education",
        completed: false,
    }, {
        id: 18,
        task: "Go for a run",
        category: "Health",
        completed: false,
    }, {
        id: 19,
        task: "Byu a new cloths",
        category: "Shopping",
        completed: false,
    }, {
        id: 20,
        task: "Prepare agenda for ICT meeting",
        category: "Work",
        completed: false,

    }, {
        id: 21,
        task: "Reply to pending Emails",
        category: "Work",
        completed: false,
    }, {
        id: 22,
        task: "Sleep before 11 pm",
        category: "Health",
        completed: false,
    }, {
        id: 23,
        task: "Work on a codding side project",
        category: "Work",
        completed: false,
    }, {
        id: 24,
        task: "Write in a journal",
        category: "Personal",
        completed: false,
    }, {
        id: 25,
        task: "Be at home before 10 pm",
        category: "Personal",
        completed: false,
    }, {
        id: 26,
        task: "Do 50 Pushups",
        category: "Fitness",
        completed: false,
    }, {
        id: 27,
        task: "Clean an organize the room",
        category: "Personal",
        completed: false,

    }, {
        id: 28,
        task: "Review team progess Result",
        category: "Work",
        completed: false,
    }, {
        id: 29,
        task: "Aviod junk food today",
        category: "Health",
        completed: false,
    }, {

        id: 30,
        task: "Do 20 minute core workout",
        category: "Fitness",
        completed: false,
    }, {
        id: 31,
        task: "Track mothly expenses",
        category: "Finance",
        completed: false,
    }, {
        id: 32,
        task: "Learn basic first Aid",
        category: "Personal",
        completed: false,
    }, {
        id: 33,
        task: "Order protien supliments",
        category: "Shopping",
        completed: false,
    }, {
        id: 34,
        task: "Drink green tea insted of coffee",
        category: "Health",
        completed: false,
    }, {
        id: 35,
        task: "Set a differenet saving  goal",
        category: "Finance",
        completed: false,
    }, {
        id: 36,
        task: "Study SQL",
        category: "Coding",
        completed: false,
    }, {
        id: 37,
        task: "Byu candels for your room ",
        category: "Shopping",
        completed: false,
    }, {
        id: 38,
        task: "Do 30 minutes Cycling",
        category: "Fitness",
        completed: false,
    }, {
        id: 39,
        task: "Watch TED talk",
        category: "Personal",
        completed: false,
    }, {
        id: 40,
        task: "Drink lemon water in the morning",
        category: "Health",
        completed: false,
    }, {
        id: 41,
        task: "Practise chin ups",
        category: "Fitness",
        completed: false,
    }, {
        id: 42,
        task: "Learn about Mutal Funds",
        category: "Finance",
        completed: false,
    }, {
        id: 43,
        task: "Byu a yoga mat",
        category: "Shopping",
        completed: false,
    }, {
        id: 44,
        task: "Update the resume",
        category: "Work",
        completed: false,
    }, {
        id: 45,
        task: "Learn Node js fundamentals",
        category: "Coding",
        completed: false,
    }, {
        id: 46,
        task: "Try a new hobby",
        category: "Personal",
        completed: false,
    }, {
        id: 47,
        task: "Cut unecessary expenses",
        category: "Finance",
        completed: false,
    }, {
        id: 48,
        task: "Reduce Sodium intake",
        category: "Health",
        completed: false,
    }, {
        id: 49,
        task: "Byu a new Mug",
        category: "Shopping",
        completed: false,
    }, {
        id: 50,
        task: "Do 200 jump ropes",
        category: "Fitness",
        completed: false,
    }, {
        id: 51,
        task: "Watch a documentary",
        category: "Education",
        completed: false,
    }, {
        id: 52,
        task: "Create a new project timeline",
        category: "Work",
        completed: false,
    }, {
        id: 53,
        task: "Study Design patterns",
        category: "Coding",
        completed: false,
    }, {
        id: 54,
        task: "Aviod late night snacking",
        category: "Health",
        completed: false,
    }, {
        id: 55,
        task: "Byu kitchen storage container",
        category: "Shopping",
        completed: false,
    }, {
        id: 56,
        task: "Get a dental checkup",
        category: "Health",
        completed: false,
    }, {
        id: 57,
        task: "Compare bank interest rates",
        category: "Finance",
        completed: false,
    }, {
        id: 58,
        task: "Cook breakfast for family",
        category: "Personal",
        completed: false,
    }, {
        id: 59,
        task: "Byu a new Novel",
        category: "Shopping",
        completed: false,
    }, {
        id: 60,
        task: "Eat more vegetabels",
        category: "Health",
        completed: false,
    }, {
        id: 61,
        task: "Review insurance coverage",
        category: "Finance",
        completed: false,
    }, {
        id: 62,
        task: "Spend time in nature",
        category: "Personal",
        completed: false,
    }, {
        id: 63,
        task: "Learn Git and Github",
        category: "Coding",
        completed: false,
    }, {
        id: 64,
        task: "Learn a magic trick",
        category: "Personal",
        completed: false,
    }, {
        id: 65,
        task: "Take a 10 minute walk after dinner",
        category: "Health",
        completed: false,
    }, {
        id: 66,
        task: "Build a portfolio website",
        category: "Coding",
        completed: false,
    }, {
        id: 67,
        task: "Practice meditation for 20 minutes",
        category: "Personal",
        completed: false,
    }, {
        id: 68,
        task: "Learn about cryptocurrency",
        category: "Finacne",
        completed: false,
    }, {

        id: 69,
        task: "Do a 7 minute HIIT workout",
        category: "Health",
        completed: false,
    }, {
        id: 70,
        task: "Schedule a call with family",
        category: "Personal",
        completed: false,
    }, {
        id: 71,
        task: "Practise public speaking",
        category: "Work",
        completed: false,
    }, {
        id: 72,
        task: "Do 100 squats",
        category: "Fitness",
        completed: false,
    }, {
        id: 73,
        task: "Byu a new running shoes",
        category: "Shopping",
        completed: false,
    }, {
        id: 74,
        task: "Learn new vocabuulary words",
        category: "Education",
        completed: false,
    }, {
        id: 75,
        task: "Learn 20 minutes New langugae",
        category: "Education",
        completed: false,
    }

];


let selectedCategory = categories[0];


const categoriescontainer = document.querySelector(".categories");
const categoryTitle= document.querySelector(".category-title");
const categoryTask= document.querySelector(".category-task");



const rendercategories = () => {

    categoriescontainer.innerHTML = "";
    categories.forEach((category) => {
        const categoryTask = task.filter(
            (task) => task.category.toLowerCase() === category.title.
                toLowerCase()
        );

        const div = document.createElement("div");
        div.classList.add("category");

        div.addEventListener("click", () => {
            wrapper.classList.add("show-category");
            selectedCategory = category;
            categoryTitle.innerHTML = category.title;
            
        })
        div.innerHTML = `
         
             <div class="left">
             <img src="images/${category.img}" alt="">
             <div class="content">
             <h1>${category.title}</h1>
             <p> ${categoryTask.length} Tasks</p>
             </div>
              </div>
               <div class="options">
               <div class="toggle-btn">
               <i class="fas fa-ellipsis-v"></i>
               </div>
               </div>
               
               `;

               categoriescontainer.appendChild(div);
    });
};

rendercategories();