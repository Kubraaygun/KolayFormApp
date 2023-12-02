const Button = ({ butonMetni }) => {
  const buttonStyle = {
    backgroundColor:
      butonMetni === "Kullanici Girisi"
        ? "greenyellow"
        : butonMetni === "Yonetici Girisi"
        ? "orangered"
        : "yellow",
  };

  return (
    <div className="user-login" style={buttonStyle}>
      {butonMetni}
    </div>
  );
};

export default Button;
