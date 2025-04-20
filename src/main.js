import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");
const searchInput = document.querySelector("input[name='search-text']");

form.addEventListener("submit", handleSearch);

function showWarning(message) {
  iziToast.warning({
    title: 'Warning',
    message: message,
    position: 'topRight'
  });
}

async function handleSearch(event) {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    showWarning("Please enter a search query");
    return;
  }

  showLoader();
  clearGallery();

  try {
    const { hits } = await getImagesByQuery(query);
    
    if (hits.length === 0) {
      showWarning("Sorry, there are no images matching your search query. Please try again!");
      return;
    }
    
    createGallery(hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight'
    });
    console.error("Error fetching images:", error);
  } finally {
    hideLoader();
    form.reset();
  }
}