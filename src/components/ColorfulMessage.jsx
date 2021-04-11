import { useEffect, useState } from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const [age, setAge] = useState(0);
  const [showFaceFlag, setShowFaceFlag] = useState(false);
  const style = {
    color,
    fontSize: "18px"
  };
  const onClickButton = () => {
    setAge(age + 1);
  };
  const onClickShowButton = () => {
    setAge(age + 1);
  };
  useEffect(() => {
    if (age % 3 === 0) {
      showFaceFlag || setShowFaceFlag(true);
    } else {
      showFaceFlag && setShowFaceFlag(false);
    }
  }, [age]);

  return (
    <>
      <p style={style}>{children}</p>
      {age}ポイントゲット！
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <button onClick={onClickShowButton}>on/off</button>
      <br />
      {showFaceFlag && "((((；ﾟДﾟ))))ｶﾞｸｶﾞｸﾌﾞﾙﾌﾞﾙ"}
    </>
  );
};

// export default ColorfulMessage;
