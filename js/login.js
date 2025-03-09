const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greetingArea = document.querySelector('.greeting-area');
const greeting = greetingArea.querySelector('.greeting');
const dialog = document.querySelector('dialog');

const USER_KEY = "userName";

function handleSubmit(e){
  e.preventDefault();

  const userName = loginInput.value;
  localStorage.setItem(USER_KEY, userName);
  loginInput.value = '';
  loginForm.classList.add('hidden');
  dialog.close();

  handelGreeting(userName);
}

function handelGreeting(userName){
  greetingArea.classList.remove('hidden');
  greeting.innerText = `Hello ${userName}!`;
}

const savedUserName = localStorage.getItem(USER_KEY);
if(savedUserName === null){
  dialog.showModal();
  loginForm.classList.remove('hidden');
} else {
  dialog.close();
  handelGreeting(savedUserName);
  loginForm.classList.add('hidden');
}

loginForm.addEventListener('submit', handleSubmit);