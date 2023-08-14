//  Cau 10
/**
 * console.log('stack [1]');
 * setTimeout(function A() { console.log('macro [2]')}, 0);
 * setTimeout(function B() { console.log('macro [3]')}, 0);
 * const p = Promise.resolve();
 * p.then(function C() {
 * setTimeout(function D() {
 *  console.log('macro [4]');
 *     setTimeout(function E() { console.log('macro [5]')});
 *  p.then(function F() { console.log('micro [6]') });
 * }, 0);
 * console.log('micro [7]');
 * });
 * console.log('stack [8]');
 *
 * Stack 1 -> đầu tiên hàm sẽ chạy vào dòng lệnh console
 * gặp settime out và promise nên sẽ đẩy qua stack webAPIs xử lý
 * Stack 8 -> chạy đến log 8
 * micro 7 -> webAPIs sẽ ưu tiên các async tự custom như promise -> gặp settimeout đẩy qua webApis và chạy log 7
 * marro 2 -> settimout 2,3 đang chờ sẵn ở ngoài trước nên sẽ chạy log 2
 * macro 3 -> tương tự
 * macro 4 -> chạy tiếp vào settimeout của fun D và gặp log 4 -> tiếp đến gặp settimeout fun E nên đẩy vào stack đợi
 * micro 6 -> khi chạy kết thúc promise thì gặp log 6 ->
 * macro 5 -> qua log 5 là kết thúc
 */
