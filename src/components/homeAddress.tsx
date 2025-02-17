import { Link } from 'react-router-dom';

import { useActions } from '@/hooks/useActions.tsx';

export const HomeAddress = () => {
  const { addressRef, handleClickAddress } = useActions();

  return (
    <>
      <h2>집 주소를 입력해주세요</h2>
      <div>
        <label htmlFor="address">집주소</label>
        <input ref={addressRef} type="text" id="address" name="address" placeholder="집주소를 입력해주세요" required />
      </div>
      <div>
        <button onClick={handleClickAddress}>
          <Link to={'/complete'}>입력한 주소로 유심받기</Link>
        </button>
      </div>
    </>
  );
};
