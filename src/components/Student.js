import { useDispatch } from "react-redux";
import { deleteStudent, checkStudent } from "../store/attendacne";
//redux쓰는 이유는 부모에게 데이터 전달할 필요없이 중앙에 있는 store에 저장되어 있는 모든 데이터로 접근하기 위해 쓴다.
// props thrinlling이라고 부르는 현상을 없애 버릴 수 있다.
export default function Student({ name, id, isHere }) {
  const dispatch = useDispatch();
  return (
    <li>
      <div
        className={isHere ? "isHere name" : "name"}
        onClick={() => {
          dispatch(checkStudent(id));
        }}
      >
        {name}
      </div>
      <button
        className="btn btnDelete"
        onClick={() => {
          dispatch(deleteStudent(id));
          //dispatch({ type: "delete", payload: { id: id } });
        }}
      >
        DELETE
      </button>
    </li>
  );
}
