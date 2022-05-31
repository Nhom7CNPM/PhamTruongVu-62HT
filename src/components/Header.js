import React from "react";
import { Link } from "react-router-dom";
import slide1 from "./img/slide1.png";
import slide2 from "./img/slide2.png";
import slide3 from "./img/slide3.png";
import Tin1 from "./img/BKAI-NAVER.png";
import Tin2 from "./img/05-Hoi-truong.png";
import Tin3 from "./img/DaiHoi.png";
function Header() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <img width="226" height="100" src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" class="header_logo header-logo" alt="SOICT" />
          </div>
          <div class="col-md-6">
            <div class="flex-col show-for-medium flex-left">
              <ul class="mobile-nav nav nav-left ">
                <li class="html custom html_topbar_left"><strong class="uppercase tt-2">Đại học Bách khoa hà nội</strong><br></br>
                  <strong class="uppercase tt-1 hide-for-medium ">TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</strong><strong class="uppercase tt-1 show-for-medium">TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</strong></li>            </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-1" style={{ 'padding-left': '100px' }}>
                <img alt="Bootstrap Image Preview" src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" />
              </div>
              <div class="col-md-1">
                <img alt="Bootstrap Image Preview" src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/gb.png" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="input-group rounded" style={{
                "width": "200px"
              }}>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{
                  "width": "100px"
                }} />
                {/* icon */}
                <span class="input-group-text border-0" id="search-addon">
                  {/* <i class="fas fa-search"></i> */}
                  <i class="bi bi-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="narbar" style={{ 'display': 'flex', 'margin-left': '115px', }}>
        {/* 1 */}
        <li class="nav-item dropdown" style={{ 'list-style': 'none' }}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ 'color': 'black' }}>
            Giới thiệu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Thông tin chung</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Triết lý giáo dục</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Cơ cấu tổ chức</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Đảng ủy – Hội đồng Trường</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Ban Lãnh đạo Trường</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Các Tổ chức Đoàn thể</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Văn phòng Trường</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Danh sách Cán bộ</a></li>

          </ul>
        </li>
        {/* 2 */}
        <li class="nav-item dropdown" style={{ 'list-style': 'none' }}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ 'color': 'black' }}>
            Khoa–Trung tâm
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Khoa</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Khoa học máy tính</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Kỹ thuật máy tính</a></li>

          </ul>
        </li>
        {/* 3 */}
        <li class="nav-item dropdown" style={{ 'list-style': 'none' }}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ 'color': 'black' }}>
            Đào tạo
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Giới thiệu chung</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Hệ Đại học</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Hệ Thạc sỹ</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Hệ Tiến sỹ</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Đào tạo Chứng chỉ</a></li>



          </ul>
        </li>

        {/* 4 */}
        <li class="nav-item dropdown" style={{ 'list-style': 'none' }}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ 'color': 'black' }}>
            Nghiên cứu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Giới thiệu chung</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Các Phòng Thí nghiệm</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Các Đề tài – Dự án</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Công bố Khoa học</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Tìm chuyên gia?</a></li>
          </ul>
        </li>

        {/* 5 */}
        <li class="nav-item dropdown" style={{ 'list-style': 'none' }}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ 'color': 'black' }}>
            Tuyển sinh
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Kiến tạo Tương lai với SoICT</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Tuyển sinh 2022!</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Điểm chuẩn tham khảo</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Tuyển sinh Đào tạo Ngắn hạn</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Hỏi đáp về tuyển sinh</a></li>

          </ul>
        </li>

        {/* 6 */}
        <li class="nav-item dropdown" style={{ 'list-style': 'none' }}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ 'color': 'black' }}>
            Sinh viên
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Biểu mẫu và quy định dành cho sinh viên</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Cố vấn học tập</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Hoạt động sinh viên nghiên cứu khoa học</a></li>
          </ul>
        </li>

        {/* 7 */}
        <li class="nav-item dropdown" style={{ 'list-style': 'none' }}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ 'color': 'black' }}>
            Hợp tác Đối ngoại
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Giới thiệu chung</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Hợp tác với Khối Hàn lâm</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Hợp tác với Khối Doanh nghiệp</a></li>
          </ul>
        </li>

        {/* 8 */}
        <li class="nav-item dropdown" style={{ 'list-style': 'none' }}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ 'color': 'black' }}>
            Cựu Sinh viên
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Giới thiệu chung</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Tấm gương Cựu Sinh viên</a></li>
          </ul>
        </li>

        {/* 9 */}
        <li class="nav-item dropdown" style={{ 'list-style': 'none' }}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ 'color': 'black' }}>
            Tin tức–Sự kiện
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Tin tức</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Thông báo</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Tin bài</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">SoICT Talks</a></li>
          </ul>
        </li>

        {/* 10 */}
        <li class="nav-item dropdown" style={{ 'list-style': 'none' }}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ 'color': 'black' }}>
            Tuyển dụng
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Việc làm tại SoICT</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Việc làm cho Sinh viên</a></li>
          </ul>
        </li>
      </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide1} class="d-block w-100" alt="anh 1"></img>
          </div>
          <div class="carousel-item">
            <img src={slide2} class="d-block w-100" alt="anh 2"></img>
          </div>
          <div class="carousel-item">
            <img src={slide3} class="d-block w-100" alt="anh 3"></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <span class="badge badge-default">Label</span>
            <h3 class="text-center">
              TIN MỚI NHÂT
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img src={Tin1} class="d-block w-100" alt="anh"></img>
            <h5>
              VÒNG CHUNG KẾT BKAI-NAVER CHALLENGE 2022
            </h5>


          </div>
          <div class="col-md-4">
            <img src={Tin2} class="d-block w-100" alt="anh"></img>
            <h5>
              INNOVATIN DAY AVF CUỘC THI SÁNG TẠO Ý TƯỞNG SINH VIÊN CREATIVE
            </h5>

          </div>
          <div class="col-md-4">
            <img src={Tin3} class="d-block w-100" alt="anh"></img>
            <h5>
              TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ
            </h5>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-warning bg-gradient bg-success p-2 text-dark bg-opacity-25">
        <span class="badge badge-default">Label</span>
        <h3 class="text-center">
          ĐÀO TẠO - TUYỂN SINH
        </h3>
        <h6 class="text-center" > Năm 2020, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS – Vương quốc Anh) đã đánh giá và xếp chất lượng đào tạo và nghiên cứu của ĐHBK Hà Nội trong các lĩnh vực mà Trường đang đảm nhận thuộc nhóm hạng từ 451 đến 500 trên toàn Thế giới, tiếp tục giữ vị trí số 1 tại Việt Nam.</h6>
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-sm-6">
                <div class="media">
                  <img class="mr-3" alt="Bootstrap Media Preview" src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/152127_1-400x267.jpg" />
                  <div class="media-body">
                    <h5 class="mt-0">
                      CHƯƠNG TRÌNH ĐÀO TẠO
                    </h5> Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng cao thuộc 3 hệ đại học, ThS và TS; trong đó, có chương trình được thị trường lao động quốc tế đón nhận với hơn 60% sinh viên tốt nghiệp làm việc ở nước ngoài. Các chương trình đào tạo thuộc vào 3 nhóm ngành chính: Khoa học Máy tính, Kỹ thuật Máy tính, và Khoa học Dữ liệu và Trí tuệ Nhân tạo…(xem tiếp)

                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="media">
                  <img class="mr-3 " alt="Bootstrap Media Preview" src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/IMG_8268_2-001-400x268.jpg" />
                  <div class="media-body">
                    <h5 class="mt-0">
                      KIẾN TẠO TƯƠNG LAI VỚI SoICT
                    </h5> Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới nước nhà, và ngày càng chứng minh được chất lượng trên trường Quốc tế. Trong làn sóng Chuyển đổi số, lựa chọn phát triển tương lai với SoICT sẽ đem lại cho các bạn cơ hội trở thành các chuyên gia công nghệ, có khả năng làm chủ và dẫn dắt sự phát triển KHCN nước nhà… (xem tiếp)

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid " img-bg="https://www.bing.com/th?id=OIP.-5EJDfQH9oVsiXBHrzqLlgHaEK&w=207&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2">
        <span class="badge badge-default">Label</span>
        <h3 class="text-center">
        HỢP TÁC ĐỐI NGOẠI
        </h3>
        <h6 class="text-center" >Trường CNTT&TT luôn coi trọng các hoạt động hợp tác quốc tế và hợp tác doanh nghiệp để nâng cao chất lượng các hoạt giảng dạy, nghiên cứu và chuyển giao công nghệ.</h6>
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-sm-6">
                <div class="media">
                  <img class="mr-3" alt="Bootstrap Media Preview" src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/Screen-Shot-2019-05-02-at-1.51.23-PM-400x318.png" />
                  <div class="media-body">
                    <h5 class="mt-0">
                      CHƯƠNG TRÌNH ĐÀO TẠO
                    </h5> Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng cao thuộc 3 hệ đại học, ThS và TS; trong đó, có chương trình được thị trường lao động quốc tế đón nhận với hơn 60% sinh viên tốt nghiệp làm việc ở nước ngoài. Các chương trình đào tạo thuộc vào 3 nhóm ngành chính: Khoa học Máy tính, Kỹ thuật Máy tính, và Khoa học Dữ liệu và Trí tuệ Nhân tạo…(xem tiếp)

                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="media">
                  <img class="mr-3 d-block w-50" alt="Bootstrap Media Preview" src="https://soict.hust.edu.vn/wp-content/uploads/DJI_0030-fixed2-mini-20190727T100030844048.jpg" />
                  <div class="media-body">
                    <h5 class="mt-0">
                      KIẾN TẠO TƯƠNG LAI VỚI SoICT
                    </h5> Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới nước nhà, và ngày càng chứng minh được chất lượng trên trường Quốc tế. Trong làn sóng Chuyển đổi số, lựa chọn phát triển tương lai với SoICT sẽ đem lại cho các bạn cơ hội trở thành các chuyên gia công nghệ, có khả năng làm chủ và dẫn dắt sự phát triển KHCN nước nhà… (xem tiếp)

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
				<div class="col-md-3 d-flex flex-column">
					<img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/nguyentuquang.jpg" />
					<h3>
						Nguyen Tu Quang
					</h3>
					<p> Viet gi do
          </p>
				</div>
				<div class="col-md-3 d-flex flex-column">
					<img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/2019/04/VuongQuangKhai-1225-1419300015.jpg" />
					<h3>
						Vuong Quang Khai
					</h3>
					<p>Viet gi do</p>
				</div>
				<div class="col-md-3 d-flex flex-column ">
					<img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/205feec3d18738d96196.jpg" />
					<h3>
						Hoang Viet Anh
					</h3>
					<p>Viet gi do</p>
				</div>
				<div class="col-md-3 d-flex flex-column">
					<img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/Lu-Thanh-Long.jpg" />
					<h3>Lu Thanh Long
					</h3>
					<p>Viet gi do</p>
				</div>
			</div>
    </div>
    <div class="carousel-item">
      <div class="row">
      <div class="col-md-3 d-flex flex-column ">
					<img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/205feec3d18738d96196.jpg" />
					<h3>
						Hoang Viet Anh
					</h3>
					<p>Viet gi do</p>
				</div>
				<div class="col-md-3 d-flex flex-column">
					<img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/Lu-Thanh-Long.jpg" />
					<h3>Lu Thanh Long
					</h3>
					<p>Viet gi do</p>
				</div>
				<div class="col-md-3 d-flex flex-column">
					<img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu-.jpg" />
					<h3>Nguyen Ha Dong
					</h3>
					<p>Viet gi do</p>
				</div>
				<div class="col-md-3 d-flex flex-column">
					<img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/hungtran-400x250.jpg" />
					<h3>Hung Tran
					</h3>
					<p>Viet gi do</p>
				</div>
			</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div >
  )
}


export default Header