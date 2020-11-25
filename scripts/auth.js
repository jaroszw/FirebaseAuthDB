auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection('guides').onSnapshot((snapshot) => {
      // })
      // .get()
      // .then((snapshot) => {
      // snapshot.docs.map((doc) => console.log(doc.data()));

      setupGuides(snapshot.docs);
    });
    // console.log(`User logged In:  ${user}`);
    setupUI(user);
  } else {
    console.log('User logged out');
    setupUI();
    setupGuides([]);
  }
});

const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();

  db.collection('guides')
    .add({
      title: createForm['title'].value,
      content: createForm['content'].value,
    })
    .then(() => {
      const modal = document.querySelector('#modal-create');
      M.Modal.getInstance(modal).close();
      createForm.reset();
    })
    .catch((error) => {
      console.log('Unsufficeint permitions: ' + error);
    });
});

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  auth.createUserWithEmailAndPassword(email, password).then((res) => {
    console.log(res.user);
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred);

    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});
