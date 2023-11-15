function hideLabel(selectElement) {
  const label = selectElement.previousElementSibling;
  if (label && selectElement.value) {
    label.style.display = 'none';
  } else {
    label.style.display = 'block';
  }
}

