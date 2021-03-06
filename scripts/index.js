const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
  if (user) {
    loggedInLinks.forEach((item) => (item.style.display = 'block'));
    loggedOutLinks.forEach((item) => (item.style.display = 'none'));
  } else {
    loggedOutLinks.forEach((item) => (item.style.display = 'block'));
    loggedInLinks.forEach((item) => (item.style.display = 'none'));
  }
};

const setupGuides = (data) => {
  let html = '';

  if (data.length) {
    data.forEach((doc) => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4">${guide.title}</div>
          <div class="collapsible-body white">${guide.content}</div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = `<h5 class='center-align'>Login to view guides</h5>`;
  }
};

// const addElement = { title: 'jakis title', content: 'lorem content' };

// const createElement = async (data) => {
// const userRef = await db.collection(`guides`);
// const snapShot = await userRef.get();
// console.log(snapShot);
// await userRef.add(data);

// if (!snapShot.exists) {
//   const { displayName, email } = userAuth;
//   const createdAt = new Date();

//   try {
//     await userRef.set({
//       displayName,
//       email,
//       createdAt,
//       ...additionalData,
//     });
//   } catch (error) {
//     console.log('error createing user', error.message);
//   }
// }

// return userRef;
// };

// createElement(addElement);

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});
