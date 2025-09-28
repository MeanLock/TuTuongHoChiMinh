import Book from "../../components/models/DuongKachMenhBook";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const CommunistPage = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="communist_page"
      className="w-full flex flex-col items-center gap-6 overflow-y-auto"
    >
      <div className="w-10/12 flex items-center justify-center py-10">
        <p className="text-[48px] text-center font-bungee">
          Quá trình ra đời và phát triển của Đảng Cộng Sản Việt Nam
        </p>
      </div>

      {/* Phần 1: Lý do Bác ra đi tìm đường cứu nước */}
      <div className="w-full px-7 gap-10">
        {/* Title */}
        <p className="font-bungee text-[36px]">
          1. Lý do Bác ra đi tìm đường cứu nước
        </p>

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center gap-10">
          <p className="font-grenze text-[36px]">
            Cuối Thế Kỷ XVIII - Đầu Thế Kỷ XIX: Việt Nam trải qua quãng thời
            gian đau thương, cả dân tộc rên xiết dưới ách xâm lược của thực dân
            Pháp.
          </p>

          <div className="w-full flex items-center justify-around">
            <div className="flex flex-col items-center gap-5">
              <img src="/images/communist/1.png" />
              <p className="text-[17px] text-center italic">
                (Công Nhân Việt Nam Làm Việc Tại Hầm Mỏ Trong Thời Pháp Thuộc)
              </p>
            </div>

            <div className="flex flex-col items-center gap-5">
              <img src="/images/communist/2.png" />
              <p className="text-[17px] text-center italic">
                (Văn Hóa Thuốc Phiện Được Thực Dân Pháp Tiêm Nhiễm Vào Xã Hội
                VN, Chế độ Ngu Dân)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-10 mt-10">
          <p className="font-grenze text-[36px]">
            Nhân dân chịu cảnh “1 cổ 2 tròng”, vừa chịu áp bức bóc lột của chế
            độ Phong Kiến và Thực Dân: “Sưu Cao Thuế Nặng, Lao Dịch Phu Phem”.
          </p>

          <div className="w-full flex items-center justify-around">
            <div className="flex flex-col items-center gap-5">
              <img src="/images/communist/3.png" />
              <p className="text-[17px] text-center italic w-[661px]">
                (Tác phẩm “Tắt Đèn” - do Ngô Tất Tố viết nhằm vạch trần cảnh sưu
                cao thuế nặng, người nông dân khổ cực)
              </p>
            </div>

            <div className="flex flex-col items-center gap-5">
              <img src="/images/communist/4.png" />
              <p className="text-[17px] text-center italic w-[661px]">
                (Tác phẩm “Bước Đường Cùng” - của Nguyễn Công Hoan phản ánh cảnh
                nông dân bị sưu cao thuế nặng, phải bán cả ruộng đất, cuối cùng
                bị dồn vào chỗ chết.)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-10 gap-5">
          <p className="font-grenze text-[36px]">
            Hàng trăm cuộc khởi nghĩa và phong trào yêu nước đã được nổ ra trên
            khắp 3 miền Bắc - Trung - Nam.
          </p>

          <div className="w-10/12 p-5 flex justify-center items-center rounded-lg bg-gradient-to-r from-[#5D0404] to-[#C30707]">
            <p className="font-grenze text-[36px] text-white">
              “Đúc Gang Sắt Để Dời Non Lấp Biển, Xối Máu Nóng Rửa Vết Nhơ Nô Lệ”
            </p>
          </div>

          <div className="w-10/12 relative flex flex-col items-center gap-10">
            <img src="/images/communist/5.png" className="h-full absolute" />
            <div className="w-full h-1/3 flex z-10 justify-between">
              <img src="/images/communist/6.png" />
              <div className="gap-2 font-grenze">
                <p className="text-[36px]">
                  Miền Bắc - Khởi Nghĩa "Yên Thế" (1884 - 1913)
                </p>
                <p className="text-[24px]">🔹Lãnh Đạo: Hoàng Hoa Thám</p>
                <p className="text-[24px]">
                  🔹Kết cục: Sau khi Đề Thám bị ám hại (1913), phong trào tan rã
                  → thất bại.
                </p>
              </div>
            </div>

            <div className="w-full h-1/3 flex z-10 justify-between">
              <div className="gap-2 font-grenze">
                <p className="text-[36px]">
                  Miền Trung - Phong trào “Cần Vương” (1885 – 1896)
                </p>
                <p className="text-[24px]">
                  🔹Lãnh đạo: dưới danh nghĩa vua Hàm Nghi, các sĩ phu như Tôn
                  Thất Thuyết, Phan Đình Phùng, Nguyễn Thiện Thuật…
                </p>
                <p className="text-[24px]">
                  🔹Kết cục: Sau khi Phan Đình Phùng mất (1895), phong trào suy
                  yếu rồi thất bại (1896).
                </p>
              </div>
              <img src="/images/communist/7.png" />
            </div>

            <div className="w-full h-1/3 flex z-10 justify-between">
              <img src="/images/communist/8.png" />
              <div className="gap-2 font-grenze">
                <p className="text-[36px]">
                  Miền Nam - Khởi nghĩa “Trương Định” (1861 – 1864)
                </p>
                <p className="text-[24px]">🔹Lãnh đạo: Trương Định</p>
                <p className="text-[24px]">
                  🔹Kết Cục: Bị Pháp phản công dữ dội, Trương Định hi sinh năm
                  1864, cuộc khởi nghĩa tan rã.
                </p>
              </div>
            </div>
          </div>

          <div className="w-10/12 flex flex-col items-center p-10">
            <p className="font-grenze text-[48px] bg-gradient-to-r from-[#929292] to-[#9C1212] bg-clip-text text-transparent">
              “Xong Tất Cả Đều Thất Bại, Bị Địch Dìm Trong Bể Máu”
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-5 mt-10">
          <p className="font-grenze text-[36px]">
            Vô cùng khâm phục tấm lòng sắc son vì tổ quốc của các anh hùng chí
            sĩ đương thời. Nhưng người thanh niên yêu nước Nguyễn Tất Thành đã
            sớm nhận ra những hạn chế của đường hướng cứu nước TRUNG QUÂN ÁI
            QUỐC của hệ tư tưởng phong kiến và đường hướng cứu nước theo khuynh
            hướng TƯ SẢN không thể đi đến thành công.
          </p>

          <img src="/images/communist/9.png" />

          <div className="w-full flex items-center text-[48px] font-grenze text-[#5D0404] mt-10">
            <ArrowRight size={25} />
            <p className="p-0 m-0">
              Dẫn tới quyết định Ra Đi Tìm Đường Cứu Nước
            </p>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <img src="/images/communist/10.png" />
            <p className="italic text-[17px]">
              (Hình ảnh người thanh niên Nguyễn Tất Thành và con tàu Amiral
              Latouche-Tréville, nơi bác ra đi “Tìm Đường Cứu Nước”)
            </p>

            <div className="w-full flex flex-col items-center gap-9">
              <p className="font-light font-grenze text-[36px] text-center">
                Quyết định Ra đi tìm đường cứu nước là sự lựa chọn đầy tính{" "}
                <span className="text-[#F42A2A]">sáng tạo</span>, hướng đi mới
                trên cơ sở tư duy độc lập, tầm nhìn mới{" "}
                <span className="text-[#F42A2A]">khác hoàn toàn</span> các bậc
                tiền bối đương thời.
              </p>

              <p className="font-grenze text-[36px]">
                <span className="text-[#5D0404]">
                  “Tự Do, Bình Đẳng, Bác Ái”
                </span>{" "}
                - Là những khẩu hiệu của cuộc Cách Mạng Pháp, đây là những khẩu
                hiệu rất mỹ miều. Người thanh niên Nguyễn Tất Thành muốn tìm
                hiểu xem có điều gì ẩn nấp đằng sau những khẩu hiệu mỹ miều đó.
                Nghe thì rất hay nhưng tại sao những người dân ở Việt Nam lại
                phải chịu những sự bất công, bị chà đạp ?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Phần 2:  */}
      <div className="w-full px-7 gap-10 mt-20">
        {/* Title */}
        <p className="font-bungee text-[36px]">
          2. Sự Trải Nghiệm và Giác Ngộ của Nguyễn Ái Quốc
        </p>

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center gap-10">
          <p className="font-grenze text-[36px]">
            Năm 1911, khi mới 21 tuổi, người xin làm phụ bếp trên con tàu Đô đốc
            Amiral Latouche-Tréville để rời bến Nhà Rồng. Từ đó có điều kiện
            thực hiện hành trình bôn ba suốt 10 năm ròng vượt qua 3 Đại Dương,
            tới 4 Châu Lục (Âu - Á - Phi - Mỹ) và khoảng 30 Quốc Gia.
          </p>

          <div className="w-full flex items-center justify-around">
            <div className="flex flex-col items-center gap-5">
              <img src="/images/communist/11.png" />
              <p className="text-[17px] text-center italic">
                (Bàn chân của người thanh niên yêu nước Nguyễn Tất Thành đã in
                dấu trên nhiều nước thuộc các đại lục Âu, Á, Phi, Mỹ.)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between items-center mt-10 px-20">
          <img src="/images/communist/12.png" />
          <div className="w-1/2 flex flex-col text-start">
            <p className="text-[36px] font-grenze text-start italic">
              Người làm nhiều nghề để sống, tận mức chứng kiến đời sống khổ cực
              của nhân dân lao động từ các nước thuộc địa cho đến những quốc gia
              phát triển nhất của Đế Quốc Tư Bản thời bấy giờ như Mỹ - Anh -
              Pháp.
            </p>
            <p className="text-[17px] text-start italic">
              (Hình ảnh người thanh niên Nguyễn Tất Thành làm phụ bếp trên tàu
              Đô Đốc Latouche-Tréville)
            </p>
          </div>
        </div>

        <div className="w-full flex items-center mt-10">
          <p className="font-grenze text-[36px] font-light">
            <strong>Người kết luận:</strong> “Ở đâu bọn Đế Quốc Thực Dân cũng
            tàn bạo độc ác, ở đâu những người lao động cũng bị bóc lột áp bức
            nặng nề và dù màu da có khác nhau trên đời này chỉ có 2 giống người.
            Giống người bóc lột và giống người bị bóc lột”
          </p>
        </div>

        <div className="w-full flex justify-between items-center mt-10 px-20 gap-20">
          <div className="w-1/2 flex flex-col text-start">
            <p className="text-[36px] font-grenze text-start">
              Tham gia tích cực các hoạt động của nhóm như Người An Nam Yêu Nước
              tại Pháp, tham gia phong trào Cộng Sản tại Pháp lấy tên là Nguyễn
              Ái Quốc. Người đã viết nhiều bài đăng trên báo Peuple Annamite để
              vạch trần chính sách đàn áp dã man của chủ nghĩa Đế Quốc nói chung
              và Đế Quốc Pháp nói riêng đối với Nhân Dân Việt Nam và Các Nước
              Thuộc Địa.
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <img src="/images/communist/13.png" />
            <p className="text-[17px] text-start italic">
              (Hình ảnh người thanh niên Nguyễn Tất Thành làm phụ bếp trên tàu
              Đô Đốc Latouche-Tréville)
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <img src="/images/communist/14.png" className="w-full" />
          <div className="w-full px-20 pt-10 flex items-center justify-center">
            <p className="font-grenze font-light text-[36px] text-center">
              Trải qua hơn 10 năm trời tìm hiểu ở nhiều Quốc Gia trên Thế Giới.
              Đến khi nghiên cứu bản{" "}
              <strong>
                “Sơ Thảo Lần Thứ Nhất Luận Cương Về Vấn Đề Dân Tộc Và Vấn Đề
                Thuộc Địa”
              </strong>{" "}
              của Vladimir Ilyich Lenin. Nguyễn Ái Quốc đã tìm ra lời giải cho
              đường lối đấu tranh giành độc lập tự do thực sự dành cho Dân Tộc.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-between items-center px-20 gap-10">
          <img src="/images/communist/15.png" className="h-[620px]" />
          <div className="flex flex-col">
            <p className="font-grenze text-[40px] text-center">
              “Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác
              ngoài Cách Mạng Vô Sản”
            </p>
            <div className="w-full flex items-center justify-end">
              <p className="font-grenze font-light text-[24px]">
                Nguyễn Ái Quốc
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-10 flex flex-col items-center gap-10 mt-10">
          <p className="font-grenze text-[36px]">
            Với tư duy độc lập, sáng tạo, Người đã sớm nhìn ra điều nhiều nhà
            yêu nước Việt Nam đương thời chưa nhận thấy. Đó là mối liên hệ thân
            thiết giữa “Cách Mạng Thuộc Địa” và “Cách Mạng Tư Sản” - “Giải Phóng
            Dân Tộc” và “Giải Phóng Giai Cấp” hay cao hơn là “Giải Phóng Con
            Người”. Đây là những phát hiện mới mẻ về vấn đề Dân Tộc và Thuộc Địa
            mà thời kỳ trước Mark và Angel của có điều kiện lịch sử để tiếp cận.
          </p>

          <p className="font-grenze text-[48px] bg-gradient-to-r from-[#929292] to-[#9C1212] bg-clip-text text-transparent">
            Người nhận ra đấu tranh giai cấp ở Phương Đông không giống như ở
            Phương Tây.
          </p>
        </div>

        <div className="w-full px-10 flex justify-between items-center mt-10">
          <p className="font-grenze text-[36px] w-[607px]">
            Mark đã xây dựng học thuyết của mình trên 1 triết lý nhất định của
            lịch sử Châu Âu, mà Châu Âu chưa phải{" "}
            <strong>TOÀN BỘ NHÂN LOẠI</strong>.
          </p>
          <img src="/images/communist/16.png" />
        </div>

        <div className="w-full">
          <img src="/images/communist/17.png" className="w-full" />
        </div>
      </div>

      {/* Phần 3: Tiếp thu, cải thiện và hiện thực hóa */}
      <div className="w-full px-7 gap-10 mt-20">
        {/* Title */}
        <p className="font-bungee text-[36px]">
          3. Tiếp thu, cải thiện và hiện thực hóa
        </p>

        {/* Content */}
        <div className="w-full flex flex-col items-center gap-5 mt-10">
          <p className="font-grenze text-[36px]">
            Sau khi có lý luận nhận thức rõ ràng về chủ nghĩa Mark-Lenin, xác
            định rõ đường hướng cứu nước, Nguyễn Ái Quốc đã sáng tạo ra nhiều
            hình thức hoạt động cách mạng
          </p>
          <p className="font-grenze font-light text-[36px]">
            Tháng 12 năm 1920, Nguyễn Ái Quốc tham gia Đại Hội lần thứ XVIII
            Đảng Xã Hội tại thành phố Tours - Pháp, với tư cách là Đại Biểu
            chính thức và duy nhất của các nước thuộc địa Đông Dương. Người đã
            bỏ phiếu tán thành tham gia Quốc Tế 3, Quốc Tế Cộng Sản. Trở thành
            người{" "}
            <span className="text-[#F42A2A]">Cộng Sản Việt Nam đầu tiên</span>.
          </p>
          <img src="/images/communist/18.png" />
          <p className="italic text-[17px]">
            (Đồng chí Nguyễn Ái Quốc tham dự và phát biểu tại Đại hội đại biểu
            toàn quốc lần thứ XVIII Đảng Xã hội Pháp ở thành phố Tours, ngày
            26/12/1920.)
          </p>
        </div>

        <div className="w-full flex justify-center mt-10">
          <div className="w-10/12 flex items-center justify-between gap-20">
            <img src="/images/communist/19.png" />
            <p className="text-[36px] font-grenze w-[568px] font-light">
              Người cùng với 1 số người yêu nước Thuộc Địa Pháp sáng lập hội
              “Liên Hiệp Các Dân Tộc Thuộc Địa”. Xuất Bản báo “Người Cùng Khổ -
              Le Paria” nhằm đoàn kết tổ chức và hướng dẫn phong trào đấu tranh
              giải phóng dân tộc ở các nước thuộc địa.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-5 mt-16">
          <p className="font-grenze text-[36px]">
            Tiếp thu và vận dụng sáng tạo chủ nghĩa Mark-Lenin, Nguyễn Ái Quốc
            đã dần xây dựng được một hệ thống lý luận về Cách Mạng Giải Phóng
            Dân Tộc phù hợp với thực tiễn Việt Nam. Trong đó lấy lực lượng Thanh
            Niên làm nòng cốt.
          </p>
          <p className="font-grenze text-[36px] font-light">
            Người tích chuẩn bị về tổ chức và cán bộ, lập ra “Thanh Niên Cách
            Mạng Đồng Chí Hội”. Tổ chức các lớp huấn luyện chính trị cho Thanh
            Niên yêu nước Việt Nam.
          </p>
          <img src="/images/communist/20.png" />
          <p className="italic text-[17px]">
            (Nguyễn Ái Quốc giảng bài tại lớp huấn luyện cán bộ Cách mạng Việt
            Nam tại Quảng Châu, Trung Quốc.)
          </p>

          <p className="font-grenze text-[36px]">
            Từ đó, Bác đã đưa lực lượng Thanh Niên nòng cốt thâm nhập vào từng
            Công Xưởng, từng Xí Nghiệp, từng Đồn điền Cao Su. Đưa tư tưởng Chủ
            nghĩa Mark-Lenin vào Việt Nam
          </p>
          <p className="font-grenze text-[40px] bg-gradient-to-r from-[#5D0404] to-[#F42A2A] bg-clip-text text-transparent">
            Tạo nền tảng cho sự phát triển của Đảng Cộng Sản Việt Nam sau này.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-5 mt-16">
          <p className="font-grenze text-[36px]">
            Nguyễn Ái Quốc cũng chủ trì xuất bản “Báo Thanh Niên” một tờ báo bí
            mật được dùng làm cơ quan ngôn luận và đấu tranh của “Việt Nam Thanh
            Niên Cách Mạng Đồng Chí Hội” và cuốn sách “Đường Kách Mệnh”.
          </p>
          <img src="/images/communist/21.png" />
          <p className="italic text-[17px]">
            (Báo Thanh Niên - tờ báo Cách mạng đầu tiên của Việt Nam)
          </p>
        </div>

        <div className="w-full flex items-center justify-between mt-10">
          <p className="font-grenze text-[36px]">
            “Đường Kách Mệnh” là cuốn sách giáo khoa chính trị đầu tiên của Việt
            Nam, do chính Người viết. Trong đó tầm quan trọng của lý luận Cách
            Mạng được đặt ở vị trí hàng đầu đối với cuộc vận động cách mạng và
            đối với đảng cách mạng tiên phong.
          </p>
          <img src="/images/communist/22.png" />
        </div>

        <div className="w-full flex flex-col items-center mt-10">
          <Book />
          <p className="italic text-[17px]">
            (Mô hình 3D cuốn sách Đường Kách Mệnh - tái bản)
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-5 mt-10">
          <p className="font-grenze text-[36px]">
            Trong “Đường Kách Mệnh”, Người chỉ rõ về sự cần thiết tất yếu phải
            có 1 chính đảng cách mạng để làm nên lịch sử:
          </p>
          <img src="/images/communist/23.png" />
          <img src="/images/communist/24.png" className="mt-10 w-full" />
          <img src="/images/communist/25.png" className="mt-10 w-full" />

          <div className="w-full mt-20 bg-white/10 border-3 border-white rounded-2xl p-20">
            <p className="font-grenze text-[36px] text-white">
              Những tư duy đột phá của “Đường Kách Mệnh” đã thổi luồng gió mới
              vào phong trào Cách Mạng ở Việt Nam. Từ đó phong trào Công Nhân
              Việt Nam có bước chuyển mình từ TỰ PHÁT đến TỰ GIÁC. Tạo nên những
              làn sóng đấu tranh mạnh mẽ, hình thành nên các tổ chức cộng sản
              ban đầu
            </p>
          </div>
        </div>
      </div>

      {/* Phần 4: Sự ra đời của đảng cộng sản việt nam */}
      <div className="w-full px-7 gap-10 mt-20">
        {/* Title */}
        <p className="font-bungee text-[36px]">
          4. Sự ra đời của đảng cộng sản việt nam
        </p>

        {/* Content */}
        {/* Đông Dương Cộng Sản Đăng */}
        <div className="w-full px-10 flex flex-col gap-5 mt-5">
          <p className="font-bungee text-[28px]">Đông Dương Cộng Sản đảng</p>
          <p className="font-grenze text-[36px] font-light">
            Ngày 17 tháng 6 năm 1929, những thành viên trong Chi Bộ Cộng Sản 5D,
            Hàm Long tuyên bố thành lập “Đông Dương Cộng sản Đảng”. Thông qua
            tuyên ngôn, điều lệnh của Đảng ra báo “Búa Liềm” làm cơ quan ngôn
            luận
          </p>
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-center gap-5">
              <img src="/images/communist/26.png" />
              <p className="italic text-[17px] text-center">(Báo Búa Liềm)</p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <img src="/images/communist/27.png" />
              <p className="italic text-[17px] text-center w-[434px]">
                (Hình ảnh ngôi nhà 5D, Hàm Long - Nơi thành lập Chi Bộ Cộng Sản
                Đầu Tiên ở Việt Nam tháng 3 năm 1929)
              </p>
            </div>
          </div>
        </div>

        {/* An Nam Cộng Sản Đăng */}
        <div className="w-full px-10 flex flex-col gap-5 mt-5">
          <p className="font-bungee text-[28px]">An Nam Cộng Sản Đảng</p>
          <p className="font-grenze text-[36px] font-light">
            Tháng 7, 1929 tại phòng 1, lầu 2, nhà số 1 đường Philippini (nay là
            đường Nguyễn Trung Trực) Tổng bộ Thanh Niên cùng Kì bộ Nam Kỳ của
            Hội Việt Nam Cách Mạng Thanh Niên quyết định thành lập An Nam Cộng
            Sản Đảng do đồng chí Châu Văn Liêm làm bí thư
          </p>
          <div className="w-full flex flex-col items-center gap-5">
            <img src="/images/communist/28.png" />
            <p className="italic text-[17px] text-center ">
              (Đồng chí Châu Văn Liêm - Bí thư An Nam Cộng Sản Đảng)
            </p>
          </div>
          <p className="font-grenze text-[36px] text-center">
            Tại Sài Gòn, An Nam Cộng Sản Đảng đã lập được Tổng Công Hội Nam Kỳ
            bao gồm nhiều Công Hội Xí Nghiệp, Công Hội Thợ Thủ Công
          </p>
        </div>

        {/* Đông Dương Cộng Sản Liên Đoàn */}
        <div className="w-full px-10 flex flex-col gap-5 mt-5">
          <p className="font-bungee text-[28px]">
            Đông Dương Cộng Sản Liên Đoàn
          </p>
          <p className="font-grenze text-[36px] font-light">
            Tại Đức Thọ, Hà Tĩnh: Tân Việt Cách Mạng Đảng sau quá trình chịu ảnh
            hưởng của chủ nghĩa Mark-Lenin, các thành viết cốt cán đã thành lập
            nhóm hạt nhân Cộng sản lấy tên là Đông Dương Cộng Sản Liên Đoàn vào
            tháng 9 năm 1929.
          </p>
        </div>

        <div className="w-full text-center font-grenze font-semibold text-[36px] flex items-center justify-center mt-30">
          <p>
            Sự ra đời của 3 Tổ Chức Cộng Sản Việt Nam là xu thế khách quan của
            Cách Mạng giải phóng Dân tộc Việt Nam. Đã khẳng định bước phát triển
            nhảy vọt của nước ta. Tuy nhiên trong quá trình hoạt động, các tổ
            chức Cộng Sản đều cho rằng mình mới xứng đáng đại diện cho giai cấp
            vô sản, đồng thời tranh giành ảnh hưởng với quần chúng lao động. Sự
            thiếu đoàn kết ý chí về tư tưởng và hành động của các Tổ Chức Cộng
            Sản dẫn tới nguy cơ phân tán về lực lượng và tổ chức. Hai Tổ chức đã
            từng bàn về chuyện hợp nhất nhưng không tìm được tiếng nói chung
          </p>
        </div>
      </div>

      {/* Phần 5: Quá trình giải quyết mâu thuẫn và hợp nhất */}
      <div className="w-full px-7 gap-10 mt-20">
        {/* Title */}
        <p className="font-bungee text-[36px]">
          5. Quá trình giải quyết mâu thuẫn và hợp nhất
        </p>

        {/* Content */}
        <div className="w-full flex flex-col gap-5 font-grenze text-[36px]">
          <p>
            Để chấm dứt tình trạng tồn tại cùng 1 lúc 3 Tổ chức Cộng Sản ở Việt
            Nam, Nguyễn Ái Quốc lúc này đang hoạt động tại Xiêm, Thái Lan với
            trách nhiệm lịch sử là phải thành lập 1 Đảng Cộng Sản duy nhất, chấm
            dứt tình trạng chia rẽ phong trào Cộng sản tại Việt Nam. Tuy chưa
            nhận được chỉ thị của Quốc Tế Cộng Sản, người đã chủ động với tư
            cách quyền hạn là Phái viên của Quốc Tế Cộng Sản triệu tập Hội Nghị
            hợp nhất các Tổ Chức Cộng Sản.
          </p>
          <p className="font-light">
            Trong báo cáo gửi Quốc Tế Cộng Sản ngày 18/02/1930, Người viết:{" "}
            <span className="font-medium">
              ”… một đồng chí từ Hồng Kông tới Xiêm tới Xiêm và cho tôi biết
              tình hình Hội An Nam Thanh niên Cách mạng tan rã; những người cộng
              sản chia thành nhiều phái … Lập tức tôi đi Trung Quốc”
            </span>
          </p>
        </div>

        <div className="w-full flex items-center justify-between gap-5 font-grenze mt-10">
          <img src="/images/communist/29.png" />
          <div className="w-1/2 flex justify-center">
            <p className="font-grenze font-light text-[36px] w-[553px]">
              ”Chúng tôi đang lo buồn cho sự đoàn kết nhất trí của những người
              cộng sản, thì một tin mừng lớn bất ngờ đến: Đồng chí Vương - tức
              Nguyễn Ái Quốc đã trở về Trung Quốc, gặp các đồng chí An Nam Cộng
              sản Đảng ở Hương Cảng và gửi thư về nước triệu tập các nhóm An Nam
              và Đông Dương Cộng sản Đảng lập tức cử đại biểu ra Hương Cảng bàn
              chuyện hợp nhất... Chúng tôi rất vui sướng vì sẽ được gặp đồng chí
              Nguyễn Ái Quốc, người mà chúng tôi biết từ lâu nhưng chưa từng gặp
              mặt … Từ lâu, chúng tôi vẫn ao ước có một người mà ai cũng phải
              thừa nhận là vô tư, là hiểu biết sâu rộng về cách mạng hơn hẳn
              chúng tôi, để nhận xét và giúp chúng tôi giải quyết mọi vấn đề
              phức tạp. Người đó chính là đồng chí Vương”
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-5">
          <p className="text-[17px] italic">
            (Đồng chí Nguyễn Thiệu, một trong sáu ủy viên Ban Lâm thời chỉ đạo
            của An Nam Cộng Sản Đảng được cử sang Hương Cảng để bàn về việc hợp
            nhất các Tổ chức Cộng sản đã kể lại)
          </p>
        </div>

        <div className="w-full flex flex-col mt-10 gap-10">
          <p className="font-grenze text-[36px]">
            Từ ngày 06/01 đến ngày 07/02 năm 1930. Hội nghị hợp nhất các Tổ Chức
            Cộng Sản thành lập Đảng Cộng Sản Việt Nam đã họp đã họp ở bán đảo
            Cửu Long thuộc Hồng Kông dưới sự chủ trì của đồng chí Nguyễn Ái Quốc
            dưới tên gọi là Vương thay mặt cho Quốc Tế Cộng Sản. Với sự tham gia
            của các Đại Biểu của các Tổ Chức:
          </p>

          <img src="/images/communist/30.png" />

          <p className="font-grenze text-[36px] font-light">
            Sau Hội nghị thành lập Đảng Cộng sản Việt Nam - với sự đồng ý của
            Nguyễn Ái Quốc, ngày 14/02/1930 tại Sài Gòn Ban chấp hành Lâm thời
            của Đảng đã họp và quyết định chấp nhận Đông Dương Cộng sản Liên
            đoàn gia nhập Đảng Cộng Sản Việt Nam.
          </p>

          <div className="w-full flex flex-col items-center gap-5">
            <img src="/images/communist/31.png" />
            <p className="text-[17px] italic">
              (Hội nghị thành lập Đảng Cộng sản Việt Nam ngày 3/2/1930. Tranh
              của họa sĩ Phi Hoanh)
            </p>
          </div>

          <p className="font-grenze text-[36px]">
            <span className=" font-light">
              Trong quá trình diễn ra cuộc họp, dưới yêu cầu phân xử các ý kiến
              trái chiều của các bên. Nguyễn Ái Quốc đã nói:
            </span>{" "}
            “Bây giờ không nói chuyện cũ để xem ai phải, ai trái nữa. Thực ra
            nhóm nào cũng có cái đúng, cũng có cái sai, nhưng mục đích của cuộc
            họp này không phải là để chỉ trích lẫn nhau, để kết luận ai đúng,
            sai sai - thì giờ và công tác cách mạng trước mắt không cho phép
            chúng ta làm chuyện đó … mục đích duy nhất của cuộc họp này là hợp
            nhất tất cả các tổ chức Cộng sản trong nước và nước ngoài thành một
            Đảng cộng sản thống nhất và vững mạnh, chiến đấu cho lợi ích chung
            của Cách mạng.”
          </p>

          <div className="w-full py-30 px-20 font-grenze text-[50px] text-[#F42A2A] flex flex-col items-center jusitify-center text-center">
            <p>
              Các đại biểu dự hội nghị đều nhất chí thống nhất các Tổ chức Cộng
              sản, thành lập một Đảng lấy tên là
            </p>
            <p className="font-extrabold text-[75px]">ĐẢNG CỘNG SẢN VIỆT NAM</p>
          </div>

          <p className="font-grenze text-[36px]">
            Hội nghị đã thông qua chánh cương vắn tắt, sách lược vắn tắt, chương
            trình tóm tắt và điều lệ vắn tắt của Đảng do đồng chí Nguyễn Ái Quốc
            soạn thảo:
          </p>

          <div className="w-full grid grid-cols-2">
            <div className="w-full flex flex-col items-center gap-5 font-grenze">
              <p className="text-[36px] font-bold">
                Chánh cương vắn tắt nêu rõ
              </p>
              <div className="w-[460px] flex flex-col gap-5 text-[20px]">
                <p>
                  <strong>Về phương diện xã hội:</strong> Dân chúng được tự do,
                  nam nữ bình quyền
                </p>
                <p>
                  <strong>Về phương diện kinh tế:</strong> Thủ tiêu hết các thứ
                  quốc trái, thu sản nghiệp lớn của đế quốc Pháp giao cho Chính
                  phủ công nông binh, thu ruộng đất chia cho người nghèo.
                </p>
                <p>
                  <strong>Về phương diện chính trị:</strong> Đánh đổ chủ nghĩa
                  đế quốc Pháp và tay sai, làm cho nước Việt Nam hoàn toàn độc
                  lập.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col items-center gap-5 font-grenze ">
              <p className="text-[36px] font-bold">Sách lược vắn tắt chỉ rõ</p>
              <div className="w-[500px] text-[28px] text-center">
                {" "}
                “Đảng là đội tiên phong của giai cấp công nhân. Đảng phải tập
                hợp của đại bộ phận giai cấp, làm cho giai cấp lãnh đạo được dân
                chúng”
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <img src="/images/communist/32.png" />
            <p className="italic text-[17px]">
              (Ảnh tư liệu về Chánh cương vắn tắt, Sách lược vắn tắt, do lãnh tụ
              Nguyễn Ái Quốc soạn thảo, tháng 2/1930.)
            </p>
          </div>

          <div className="w-full flex flex-col gap-5">
            <p className="font-grenze text-[36px]">
              Văn kiện quan trọng nhất là Lời Kêu Gọi của Đảng Cộng Sản Việt Nam
              tới mọi tầng lớp nhân dân do đồng chí Nguyễn Ái Quốc thay mặt Quốc
              Tế Cộng Sản và Đảng Cộng Sản Việt Nam soạn thảo
            </p>
            <div className="w-full flex items-center justify-center">
              <div className="w-10/12 flex items-center justify-between">
                <img src="/images/communist/33.png" />
                <div className="w-1/2 flex justify-center items-center">
                  <p className="font-grenze text-[40px] font-light w-[499px]">
                    “Nếu đế quốc Pháp tưởng có thể dùng khủng bố trắng hòng tiêu
                    diệt cách mạng An Nam thì chúng đã lầm to! Một là, cách mạng
                    An Nam không bị cô lập, trái lại, được giai cấp vô sản thế
                    giới nói chung và giai cấp cần lao Pháp nói riêng ủng hộ.
                    Hai là, giữa lúc cuộc khủng bố trắng lên đến đỉnh cao thì
                    những người cộng sản An Nam trước kia chưa có tổ chức đang
                    thống nhất lại thành một đảng, Đảng Cộng sản Việt Nam, để
                    lãnh đạo toàn thể anh chị em bị áp bức chúng ta làm cách
                    mạng.”
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-10 mb-50">
              <p className="font-grenze text-[36px]">
                Ở giai đoạn lịch sử này, Nguyễn Ái Quốc là người duy nhất có đủ
                năng lực và uy tín để đứng ra tập hợp và đoàn kết các Tổ chức
                Cộng sản tại Việt Nam thành 1 Đảng Cộng sản duy nhất. Hội nghị
                hợp nhất các Đảng Cộng sản Việt Nam mang tầm vóc như một Đại hội
                thành lập Đảng.
              </p>
              <p className="mx-auto font-grenze text-[50px] text-[#9C1212]">
                Ngày 03 tháng 02 năm 1930 trở thành ngày thành lập Đảng Cộng sản
                Việt Nam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunistPage;
