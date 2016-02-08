
function morris(str){
				var out = "";
				while(str.length > 0){
					count = morris_extr(str.substr(0, 1), 0, str);
					out += count + str.substr(0, 1);
					str = str.substr(count);
				}
				return out;
			}
			
			function morris_extr(start, cnt, str){
				if(str.length > 0 && str.substr(0, 1) == start){
					return morris_extr(start, cnt + 1, str.substr(1))
				}
				else{
					return cnt;
				}
			}
			
			var x = document.getElementById("seed").value;
			var n = document.getElementById("depth").value;
			for(var i = 0; i < n; i++){
				 console.log(x);
				x = morris(x);
			}