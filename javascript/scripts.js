/* Flashing Title*/
let alertShow = false;
setInterval(() => {
  document.title = alertShow ? "MeMes MACHINE" : "Gerador de Memes";

  alertShow = !alertShow;
}, 1000);

function enablePhotoUpload() {
  const imageinput = document.querySelector("#image-input");
  imageinput.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploadImage = reader.result;

      changeMemePicture(uploadImage);
    });
    reader.readAsDataURL(this.files[0]);
  });
}

async function mapImagesList() {
  const memesObject = [
    {
      name: "chapolin",
      path: "assets/pictures/chapolin.jpg",
    },
    {
      name: "chloe",
      path: "assets/pictures/chloe.jpg",
    },
    {
      name: "funny-cat1",
      path: "assets/pictures/funny-cat1.png",
    },
    {
      name: "funny-cat2",
      path: "assets/pictures/funny-cat2.png",
    },
    {
      name: "devnerd",
      path: "assets/pictures/devnerd2.jpeg",
    },
  ];
  return memesObject;
}

async function createGallery(imageList) {
  const memeSelector = document.querySelector("#memes-list");

  imageList.forEach((picture) => {
    let newOption = document.createElement("option");
    newOption.text = picture.name.toUpperCase();
    newOption.value = picture.path;
    memeSelector.appendChild(newOption);
  });
}

async function changeMemePicture(photo) {
  let displayImage = document.querySelector("#display-image");
  displayImage.style.backgroundImage = `url( '${photo}')`;
}

async function main() {
  const memesImageList = await mapImagesList();

  enablePhotoUpload();
  await createGallery(memesImageList);
  await changeMemePicture(memesImageList[2].path);
}

main();
