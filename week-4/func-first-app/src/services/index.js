const getData = async () => {
  try {
    const response = await fetch(
      'https://614f3e1cb4f6d30017b48511.mockapi.io/api/youtube'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getData };
