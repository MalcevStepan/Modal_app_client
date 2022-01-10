import { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import Header from "../components/Header";
import { RESULT_ROUTE } from "../utils/consts";

function Table() {

  const {col} = useContext(Context);


  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);

  const navigate = useNavigate();

  const [wordd, setWordd] = useState(col.word);
  const [res, setRes] = useState(0);

  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);
  const [c5, setC5] = useState(0);
  const [c6, setC6] = useState(0);
  const [c7, setC7] = useState(0);
  const [c8, setC8] = useState(0);
  const [c9, setC9] = useState(0);
  
  useEffect(() => {

    check1 ? (setC1(1)) : (setC1(0));
    check2 ? (setC2(1)) : (setC2(0));
    check3 ? (setC3(1)) : (setC3(0));
    check4 ? (setC4(1)) : (setC4(0));
    check5 ? (setC5(1)) : (setC5(0));
    check6 ? (setC6(1)) : (setC6(0));
    check7 ? (setC7(1)) : (setC7(0));
    check8 ? (setC8(1)) : (setC8(0));
    check9 ? (setC9(1)) : (setC9(0));

  }, [check1, check2, check3, check4, check5, check6, check7, check8, check9]);


  useEffect( () => {
    const z = -1.01+0.46*c1-0.33*c2+0.26*c3+0.3*c4-0.13*c5+0.25*c6+0.14*c7+0.8*c8+0.92*c9;                
    const p = Math.exp(z) / (1 + Math.exp(z));
    const num = (Number(p.toFixed(4)));
    setRes(num);
  }, [c1, c2, c3, c4, c5, c6, c7, c8, c9])

  useEffect( () => {
    res < 0.293 ?  setWordd('низкая') : setWordd('высокая');
    console.log(res);
  }, [res])
  
     function result() {
     const data = {c1, c2, c3, c4, c5, c6, c7, c8, c9, res, word: wordd}
  
     col.setResult(res);
     col.setWord(wordd);
     col.setCols( {c1, c2, c3, c4, c5, c6, c7, c8, c9} );

     localStorage.setItem('data', JSON.stringify(data));

    navigate(RESULT_ROUTE);
    }
  

  return (
    <div>
      <Header />
      <Container>
        <div style={{ padding: "1.25rem" }} className="tableCard">
          <h4>
            Прогностическая модель для определения вероятности развития
            геморрагического синдрома у недоношенных новорожденных с врожденной
            пневмонией
          </h4>
          <h6 className="fullname">А. Н. Горячко, А. В. Сукало</h6>
          <div className="descript">
            Прогностическая модель для определения вероятности развития
            геморрагического синдрома у недоношенных новорожденных с врожденной
            пневмонией
          </div>
          <div style={{ marginTop: "1rem" }}>
            Проведен сравнительный анализ 214 факторов анамнеза жизни, исходов
            предыдущих беременностей, осложнений настоящей беременности,
            результатов клинических и лабораторных методов исследования у
            новорожденных в первые трое суток жизни. В последующем определены
            наиболее значимые факторы, ассоциированные с развитием врожденной
            пневмонии у недоношенных новорожденных с очень низкой и экстремально
            низкой массой тела. На основании бинарной логистической регрессии и
            ROC-анализа выведена прогностическая модель с чувствительностью,
            равной 87,6%, и специфичностью – 85,5%, что при пороговых значениях
            ≥0,73 позволяет отнести недоношенных новорожденных с очень низкой и
            экстремально низкой массой тела к группе высокого риска по развитию
            врожденной пневмонии.
          </div>
          <div style={{ marginTop: "1rem" }} className="checkboxes">
            <Form >
              <Form.Group controlId="check1">
                <Form.Check 
                  onChange={() => setCheck1(!check1)}
                  checked={check1}
                  type="checkbox"
                  label="АЧТВ"
                />
              </Form.Group>
              <Form.Group controlId="check2">
                <Form.Check
                  onChange={() => setCheck2(!check2)}
                  checked={check2}
                  type="checkbox"
                  label="R"
                />
              </Form.Group>
              <Form.Group controlId="check3">
                <Form.Check
                  onChange={() => setCheck3(!check3)}
                  checked={check3}
                  type="checkbox"
                  label="ПВ"
                />
              </Form.Group>
              <Form.Group controlId="check4">
                <Form.Check
                  onChange={() => setCheck4(!check4)}
                  checked={check4}
                  type="checkbox"
                  label="ПИ"
                />
              </Form.Group>
              <Form.Group controlId="check5">
                <Form.Check
                  onChange={() => setCheck5(!check5)}
                  checked={check5}
                  type="checkbox"
                  label="МНО"
                />
              </Form.Group>
              <Form.Group controlId="check6">
                <Form.Check
                  onChange={() => setCheck6(!check6)}
                  checked={check6}
                  type="checkbox"
                  label="ТВ"
                />
              </Form.Group>
              <Form.Group controlId="check7">
                <Form.Check
                  onChange={() => setCheck7(!check7)}
                  checked={check7}
                  type="checkbox"
                  label="фибриноген"
                />
              </Form.Group>
              <Form.Group controlId="check8">
                <Form.Check
                  onChange={() => setCheck8(!check8)}
                  checked={check8}
                  type="checkbox"
                  label="Д-димер"
                />
              </Form.Group>
              <Form.Group controlId="check9">
                <Form.Check
                  onChange={() => setCheck9(!check9)}
                  checked={check9}
                  type="checkbox"
                  label="PLT"
                />
              </Form.Group>
            </Form>
          </div>
          <Button className="colbut" variant="primary" onClick={result} style={{ marginTop: "1.25rem" }}>
            Продолжить
          </Button>

        </div>
      </Container>
    </div>
  );
}

export default Table;
