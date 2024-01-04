import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Modal from "./modal";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNestedVisible, setIsNestedVisible] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setIsVisible(true)}>Открыть окно</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Modal
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        className="custom-modal"
      >
        <button
          onClick={() => {
            setIsNestedVisible(true);
          }}
        >
          Вложенное окно
        </button>
        <Modal
          isVisible={isNestedVisible}
          onClose={() => {
            setIsNestedVisible(false);
          }}
        >
          Вложенное окно
        </Modal>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi
        non, dicta cumque, incidunt cum qui fugiat reprehenderit consequuntur
        quia alias eum excepturi ipsum repellendus odio temporibus doloremque et
        quam ab itaque ratione nihil culpa. Perspiciatis eveniet debitis natus,
        quasi quaerat dolor quidem exercitationem! Reiciendis, mollitia. Totam
        voluptatibus, iste ex cumque atque tempore repellendus laudantium
        voluptate, labore illo nam veritatis a corporis odit exercitationem
        ipsam ipsa. Magnam, ea quaerat. Veritatis officia hic illum fugiat
        exercitationem pariatur. Vel laborum accusamus voluptas sequi rerum
        atque recusandae autem quidem, maiores quod dolore aut inventore eum nam
        ad laboriosam accusantium eligendi dolorum ipsum eius. Commodi magnam
        delectus recusandae, dolores vel fugiat voluptatibus explicabo veniam
        odit corporis ut assumenda dolor, consequatur repudiandae distinctio
        eligendi nostrum necessitatibus reprehenderit modi quia facere
        doloremque et error. Alias doloremque ratione iste, delectus blanditiis
        odit qui harum tempore eius cum ullam dignissimos commodi aperiam
        temporibus pariatur. Excepturi similique autem voluptatum, commodi
        voluptatibus sit cupiditate provident non. Sequi asperiores voluptas
        molestiae aperiam voluptate. Quis quasi mollitia, neque quod cupiditate
        reiciendis quae quisquam, veniam nam error a provident eveniet. Quasi
        voluptates id repudiandae accusantium at! Alias minus veritatis
        expedita. Debitis iste, officia consequuntur, deserunt modi minus
        voluptates perspiciatis voluptatem sint temporibus rerum blanditiis
        fugiat necessitatibus fugit tempore minima totam! Temporibus fugit
        sapiente aperiam! Esse omnis iusto atque sequi aliquid ipsa facilis iste
        rem aut sint aperiam explicabo assumenda labore, enim est eligendi hic
        quas quisquam, repudiandae ab quasi tenetur exercitationem illo
        provident! Eaque quia dolorum adipisci ipsa non. Consequatur deserunt
        ipsa enim, iure iusto exercitationem cumque odio cum eaque ipsum
        pariatur ad voluptas mollitia a hic adipisci quam id. Aperiam distinctio
        explicabo aliquam. Hic voluptas repellendus maxime blanditiis nulla
        dicta ut, est illum, architecto distinctio quos? Nam modi voluptate,
        provident illum laborum saepe aliquam officia consequatur? Ab assumenda
        cum vel maiores natus corrupti laborum velit aspernatur maxime
        inventore. Velit sit non culpa, facilis facere deserunt omnis odit
        corporis sequi quaerat porro exercitationem ut rerum voluptatum tempora
        error saepe excepturi ratione molestiae. Suscipit excepturi expedita
        quis, exercitationem corrupti voluptates ea voluptas id culpa
        repellendus odio sunt quo eveniet porro alias doloremque nesciunt libero
        maiores repudiandae. Optio commodi reiciendis vero. Eligendi
        necessitatibus tempore placeat doloremque quas non praesentium minima?
        Nobis autem aspernatur sed, architecto praesentium tempora harum nulla
        laborum nesciunt, iure ipsam fugiat eius, iste alias. Minus ad, est
        assumenda veritatis voluptate ut expedita dicta eos dolorem soluta enim,
        explicabo quasi neque illum commodi suscipit, possimus corporis
        asperiores deleniti ipsa. Temporibus inventore nulla cupiditate officia,
        sunt adipisci. Iure placeat suscipit quam doloribus facilis veniam ipsam
        velit voluptate nihil, eveniet eos ducimus sint modi itaque aspernatur
        obcaecati ullam, enim, excepturi voluptatum laborum animi. Minima aut
        omnis doloribus animi. Eos voluptas, accusamus porro quidem debitis
        numquam veniam a suscipit deserunt explicabo. Possimus quos eos, aliquid
        fugiat pariatur rem, a, autem suscipit recusandae obcaecati eius
        consectetur minus architecto et. Cumque ea possimus fugit, aperiam minus
        placeat ipsa hic fuga similique autem, quisquam, maiores odio! Quibusdam
        voluptatem repellendus recusandae voluptatum unde, error fugit nostrum,
        labore dolorum ad vitae consequatur non quas voluptatibus distinctio ea
        at ratione? Consequatur tenetur animi voluptatem ullam magnam, quis
        illo, est recusandae sint nisi inventore obcaecati nam, culpa aliquid
        eos. Ducimus, quis? Totam deleniti, eligendi nobis voluptatibus rem et
        quis voluptate temporibus ipsum, consectetur fugit consequatur nulla
        dignissimos voluptates animi optio perspiciatis? Eligendi iusto quas,
        consequatur cumque sequi perspiciatis soluta, officiis optio numquam
        voluptatibus necessitatibus tenetur eum nisi reiciendis. Sed nisi
        deserunt, blanditiis id error tenetur optio magni? Asperiores doloremque
        quos voluptas necessitatibus, quod a debitis quaerat, hic eum alias quis
        provident sit autem laborum minus sapiente ducimus sunt nobis? Doloribus
        error, earum harum aperiam maiores tenetur ab nisi pariatur quos maxime,
        non eligendi placeat voluptatum nesciunt aspernatur commodi. Labore
        explicabo culpa aspernatur saepe placeat quidem ab ex possimus, numquam
        magnam? Sequi ea explicabo fugit est totam nemo tenetur, tempora quam
        blanditiis porro dolore! Quas molestiae et impedit, dolorem ad
        repellendus officia corporis commodi, incidunt expedita quo hic
        cupiditate. Accusamus quas eaque quisquam voluptas earum nemo veniam,
        non dolorum ipsam incidunt eius quos, animi aut velit ducimus?
        Repudiandae voluptas magni unde possimus optio voluptatem ducimus amet
        quis perspiciatis vel. Ratione obcaecati molestiae consequatur numquam
        deserunt cumque provident porro fuga maxime minus, vel, minima deleniti
        quia eos vitae nostrum aliquid odio veniam, repellat voluptas quam ea
        ullam quisquam. Totam temporibus velit quam quia, deserunt debitis sint
        veniam at esse architecto, illum ullam ipsam soluta quaerat ut obcaecati
        ex. Soluta, inventore. Aliquid, nemo eos, architecto vel amet enim
        aliquam error suscipit necessitatibus ipsam similique quam atque quo
        impedit, deserunt incidunt nam ipsa fuga odit corporis rerum! Alias
        itaque quo et omnis dolorum officiis error excepturi ea sequi corrupti
        quas veritatis est, quisquam, obcaecati quis vero aliquam magni dolore
        vel placeat atque aliquid inventore aut! Exercitationem dignissimos
        quisquam, sapiente numquam enim adipisci est veniam facilis et quaerat.
      </Modal>
    </>
  );
}

export default App;
