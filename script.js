    const wrapper=document.querySelector('.wrapper');
    const backBtn=document.querySelector(".back-btn");
    const menubtn=document.querySelector('.menu-btn');


    menubtn.addEventListener('click', toggleScreen);
    backBtn.addEventListener('click', toggleScreen);

    function toggleScreen  ()  {
    wrapper.classList.toggle("show-category");
    }

    const addTaskbtn= document.querySelector('.add-task-btn');
    const addTaskform= document.querySelector('.add-task');


    const toggleAddtaskForm = () => {
        addTaskform.classList.toggle('active');
    };

    addTaskbtn.addEventListener('click', toggleAddtaskForm);