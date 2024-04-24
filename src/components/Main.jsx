import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import { IoMdAdd } from 'react-icons/io';
import ThreadList from './ThreadList';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralVoteThread,
} from '../states/threads/action';

function Main() {
  const {
    users = [],
    threads = [],
    authUser,
    loading,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralVoteThread = (id) => {
    dispatch(asyncNeutralVoteThread(id));
  };

  const threadsList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.user),
    authUser: authUser.id,
  }));

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <main>
      <aside>
        <article className="profile card">
          <header>
            <h2>Kota Bandung</h2>
            <p>Kota Kembang Paris van Java</p>
            <figure>
              <figcaption>Lambang</figcaption>
            </figure>
          </header>
          <section>
            <h3>Informasi Lainnya</h3>
            <table>
              <tbody>
                <tr>
                  <th>Negara</th>
                  <td>Indonesia</td>
                </tr>
                <tr>
                  <th>Hari jadi</th>
                  <td>25 September 1810</td>
                </tr>
                <tr>
                  <th>Luas Total</th>
                  <td>
                    167.67 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <th>Bahasa Daerah</th>
                  <td>Sunda</td>
                </tr>
                <tr>
                  <th>Kode Telepon</th>
                  <td>+62 22</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </aside>
      <div className="content">
        <h1>Diskusi Aktif</h1>
        <article className="card">
          <h2 id="sejarah">Sejarah</h2>
          <ThreadList
            threads={threadsList}
            upVote={onUpVoteThread}
            downVote={onDownVoteThread}
            neutralVote={onNeutralVoteThread}
          />
          <Link to="/new">
            <Fab
              aria-label="add"
              sx={{
                bottom: 40,
                right: 40,
                position: 'fixed',
                bgcolor: '#91ff35',
              }}
            >
              <IoMdAdd style={{ fontSize: '30px', color: 'black' }} />
            </Fab>
          </Link>
        </article>
        <article className="card">
          <h2 id="geografis">Geografis</h2>
          <p>
            Kota Bandung dikelilingi oleh pegunungan, sehingga bentuk morfologi
            wilayahnya bagaikan sebuah mangkok raksasa, secara geografis kota
            ini terletak di tengah-tengah provinsi Jawa Barat, serta berada pada
            ketinggian ±768 m di atas permukaan laut, dengan titik tertinggi di
            berada di sebelah utara dengan ketinggian 1.050 meter di atas
            permukaan laut dan sebelah selatan merupakan kawasan rendah dengan
            ketinggian 675 meter di atas permukaan laut.
          </p>
          <p>
            Kota Bandung dialiri dua sungai utama, yaitu Sungai Cikapundung dan
            Sungai Citarum beserta anak-anak sungainya yang pada umumnya
            mengalir ke arah selatan dan bertemu di Sungai Citarum. Dengan
            kondisi yang demikian, Bandung selatan sangat rentan terhadap
            masalah banjir terutama pada musim hujan.
          </p>
        </article>
        <article className="card">
          <h2 id="wisata">Wisata</h2>
          <p>
            Sejak dibukanya Jalan Tol Cipularang, kota Bandung telah menjadi
            tujuan utama dalam menikmati liburan akhir pekan terutama dari
            masyarakat yang berasal dari Jakarta sekitarnya. Selain menjadi kota
            wisata belanja, kota Bandung juga dikenal dengan sejumlah besar
            bangunan lama berarsitektur peninggalan Belanda.
          </p>
          <section>
            <h3>Farm House Lembang</h3>
            <p>
              Berada di jalur utama Bandung-Lembang, Farm House menjadi objek
              wisata yang tidak pernah sepi pengunjung. Selain karena letaknya
              strategis, kawasan ini juga menghadirkan nuansa wisata khas Eropa.
              Semua itu diterapkan dalam bentuk spot swafoto Instagramable.
            </p>
          </section>

          <section>
            <h3>Observatorium Bosscha</h3>
            <p>
              Memiliki beberapa teleskop, antara lain, Refraktor Ganda Zeiss,
              Schmidt Bimasakti, Refraktor Bamberg, Cassegrain GOTO, dan
              Teleskop Surya. Refraktor Ganda Zeiss adalah jenis teleskop
              terbesar untuk meneropong bintang. Benda ini diletakkan pada atap
              kubah sehingga saat teropong digunakan, atap tersebut harus
              dibuka. Observatorium Bosscha boleh dikunjungi oleh siapapun,
              tanpa tiket. Namun, bagi yang ingin menggunakan teleskop Zeiss,
              wajib mendaftarkan diri. Untuk instansi atau lembaga pendidikan,
              diberikan jadwal hari Selasa sampai Jumat. Sementara itu,
              kunjungan individu dibuka setiap hari Sabtu.
            </p>
          </section>
        </article>
      </div>
      <aside>
        <article className="profile card">
          <header>
            <h2>Kota Bandung</h2>
            <p>Kota Kembang Paris van Java</p>
            <figure>
              <figcaption>Lambang</figcaption>
            </figure>
          </header>
          <section>
            <h3>Informasi Lainnya</h3>
            <table>
              <tbody>
                <tr>
                  <th>Negara</th>
                  <td>Indonesia</td>
                </tr>
                <tr>
                  <th>Hari jadi</th>
                  <td>25 September 1810</td>
                </tr>
                <tr>
                  <th>Luas Total</th>
                  <td>
                    167.67 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <th>Bahasa Daerah</th>
                  <td>Sunda</td>
                </tr>
                <tr>
                  <th>Kode Telepon</th>
                  <td>+62 22</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </aside>
    </main>
  );
}
export default Main;
