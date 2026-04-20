function status(request, response) {
  response.status(200).json({ texto: "Ele está vivo!" });
}

export default status;
