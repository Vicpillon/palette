import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Order = () => {
    const navigate = useNavigate();

    const [product,setProduct] = useState();

    const [receiverName,setReceiverName] = useState();
    const [receiverPhoneNumber,setReceiverPhoneNumber] = useState();
    const [address,setAddress] = useState();
    const [comment,setComment] = useState();
    const [totalCount,setTotalCount] = useState();
    const [totalPrice,setTotalPrice] = useState();
    const [newCart,setNewCart] = useState();
    
    useEffect(() => {
        if(!userState.login){
            return alert("로그인을 해주세요.");
            navigate("/login");
        }
    })

    useEffect(() => {
        setTotalCount(
            newCart.reduce(
                (sum,current) => sum + current.countProduct,0)
        );
        setTotalPrice(
            newCart.reduce(
                (sum,current) => sum + current.productPrice * current.productQuantity, 0)
        );

    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const orderInfo = {
                userEmail : userState.userEmail,
                Name : name,
                PhoneNumber : phonenumber,
                Address : address,
            };
            await axios.post(`/server/service/orderService`, orderInfo)
        }
    }
    return (
        <>
          <div>
            <Nav linkList={["login", "signup"]}></Nav>
          </div>{" "}
          <OrderPageContainer>
            <Container onSubmit={handleSubmit}>
              <OrderInfo>
                <Title>배송지 정보</Title>
                <label>
                  <P>이름</P>
                  <input
                    type="text"
                    value={name}
                    placeholder="이름"
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  <P>연락처</P>
                  <input
                    type="text"
                    value={num}
                    placeholder="01012345678"
                    onChange={(e) => setNum(e.target.value)}
                  />
                </label>
                <label>
                  <P>주소</P>
                  <input
                    type="text"
                    value={add}
                    onChange={(e) => setAdd(e.target.value)}
                  />
                </label>
                
                <label>
                  <P>요청사항</P>
                  <Select
                    onChange={(e) => {
                      setOptionValue(e.target.value);
                    }}
                  >
                    <option value="">직접 입력</option>
                    <option value="직접 수령하겠습니다.">
                      직접 수령하겠습니다.
                    </option>
                    <option value="배송 전 연락바랍니다.">
                      배송 전 연락바랍니다.
                    </option>
                    <option value="부재 시 경비실에 맡겨주세요.">
                      부재 시 경비실에 맡겨주세요.
                    </option>
                    <option value="부재 시 문 앞에 놓아주세요.">
                      부재 시 문 앞에 놓아주세요.
                    </option>
                    <option value="부재 시 택배함에 넣어주세요.">
                      부재 시 택배함에 넣어주세요.
                    </option>
                  </Select>
                  {!optionValue && (
                    <input
                      type="text"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  )}
                </label>
              </OrderInfo>
              {newCart[0] && (
                <PaymentInfo>
                  <Title>결제정보</Title>
                  <PaymentDetail>
                    <P>주문상품</P>
                    <div>{`${newCart[0].productName} 등 ${cartTotalCount}개`}</div>
                  </PaymentDetail>
                  <PaymentDetail>
                    <P>상품총액</P>
                    <div>{cartTotalPrice.toLocaleString()}원</div>
                  </PaymentDetail>
                  <PaymentDetail>
                    <P>배송비</P>
                    <div>{DeliveryFee.toLocaleString()}원</div>
                  </PaymentDetail>
                  <PaymentDetail>
                    <P>총 결제금액</P>
    
                    {discount === 1 ? (
                      <div>{(cartTotalPrice + DeliveryFee).toLocaleString()}원</div>
                    ) : (
                      <div>
                        <PriceBefore>
                          {(cartTotalPrice + DeliveryFee).toLocaleString()}원
                        </PriceBefore>
                        <div>
                          {(cartTotalPriceDiscount + DeliveryFee).toLocaleString()}
                          원
                        </div>
                      </div>
                    )}
                  </PaymentDetail>
                  <button type="submit">주문하기</button>
                </PaymentInfo>
              )}
            </Container>
            <Footer></Footer>
          </OrderPageContainer>
        </>
      );
    };
    
