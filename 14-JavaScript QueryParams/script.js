function openDetailPage(id) {
  let params = new URLSearchParams();
  params.append("id", id);
  window.location.href = "detailpage.html" + "?" + params.toString();
}
