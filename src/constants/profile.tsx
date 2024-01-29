import { FaCalendar, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const PROFILE = [
  {
    icon: <FaCalendar />,
    type: "생년월일",
    content: "1992.11.23",
  },
  {
    icon: <FaLocationDot />,
    type: "주소지",
    content: "서울시 구로구 오류동",
  },
  {
    icon: <FaPhone />,
    type: "연락처",
    content: "010-9201-3425",
  },
  {
    icon: <MdEmail />,
    type: "이메일",
    content: "dev.kswoo@gmail.com",
  },
];
