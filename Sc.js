import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
http.get('http://smksebhak.ddns.my.id:1088/');
http.get('http://smksebhak.ddns.my.id:2088/');
http.get('http://smksebhak.ddns.my.id:3088/');
sleep(1);
}
