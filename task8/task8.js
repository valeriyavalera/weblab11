/* 
Task 8

Створити функцію generateCrad, яка буде приймати об'єкт з наступною стурктурою

```
{
 title: "Title 1",
 imageUrl: "Some url",
 description: "Eu ut non sint ullamco minim anim laboris sit nulla."
}
```

На основі цього аргументу в body має з'явитися наступний елемент:

```
const card = {
 title: "Title 1",
 imageUrl: "Some url",
 description: "Eu ut non sint ullamco minim anim laboris sit nulla."
};
```

> generateCrad(card);

```
<body>
 <div class="card">
   <h4>Title 1</h4>
   <br>
   <img src="Some url" alt="alternative text was not provided">
   <p>
    Eu ut non sint ullamco minim anim laboris sit nulla.
   </p>
 </div>
</body>
*/

card = 
   {
      title: 'Title 1',
      imageUrl: 'http://i5.ifrype.com/business/354/565/v1338624544/ngm_13354565.jpg',
      description: 'Smile )'
   }
function GenerateCard(obj){

   const body = document.body;

   const div = document.createElement('div');
   div.classList.add('card');

   const h4 = document.createElement('h4');
   h4.innerText = obj.title;

   const photo = document.createElement('img');
   photo.src = obj.imageUrl;
   photo.height = 200;

   const p = document.createElement('p');
   p.innerText = obj.description;

   const br = document.createElement('br');

   div.appendChild(h4);
   div.appendChild(br);
   div.appendChild(photo);
   div.appendChild(p);

   body.appendChild(div);


}


GenerateCard(card);