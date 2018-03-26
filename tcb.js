// ==============================热门回收数据====================================
$.ajax({
	url:"/doGetHotHsList?num=5",
	type:"get",
	dataType:"json",
	success:function(data){
		$.ajax({
			url:"TCB_tmp/remensj.html",
			dataType:"text",
			success:function(tmp){
				$("#rt .colr").html(baidu.template(tmp,data));
			}
		})
	}
});
// =================================优品精选数据=================================
$.ajax({
	url:"/dogethotlist?num=5",
	type:"get",
	dataType:"json",
	success:function(data){
		$.ajax({
			url:"TCB_tmp/youpin.html",
			dataType:"text",
			success:function(tmp){
				$(".cc").html(baidu.template(tmp,data));
			}
		})
	}
});
// =================================买二手机数据4=============================
  $.ajax({
		url: "/youpin/dogetpinpailist",
		dataType: "json",
		success: function(data){
			$.ajax({
				url: "TCB_tmp/msjp.html",
				dataType: "text",
				success: function(tmp){
					$(".msjp").html(baidu.template(tmp, data));
				}
			});
		}
	});
// ==================================卖电脑/手机数据3================================
	$.ajax({
		url:"/huishou/dogetpinpailist",
		dataType:"json",
		success:function(data){
			$.ajax({
				url:"TCB_tmp/mesj.html",
				dataType:"text",
				success:function(tmp){
					$(".danmut .esj").html(baidu.template(tmp,data));
				}
			});
		}
	});
// ===================================修收数据1=====================================
	$.ajax({
		url:"/aj_get_fault_group",
		dataType:"json",
		success:function(data){
			$.ajax({
				url:"TCB_tmp/xsj.html",
				dataType:"text",
				success:function(tmp){
					$(".danmu").html(baidu.template(tmp,data));
				}
			});
		}
	});
// ======222222222=22222222222======修电脑数据22===========222===============
	$.ajax({
		url:"/shangmen/dogetpinpailist",
		dataType:"json",
		success:function(data){
			$.ajax({
				url:"TCB_tmp/sdn.html",
				dataType:"text",
				success:function(tmp){
					$(".danmuo").html(baidu.template(tmp,data));
				}
			});
		}
	});
// =================================切换城市数据1================================
	$.ajax({
		url:"/aj/getcitycode",
		dataType:"json",
		success:function(data){
			$.ajax({
				url:"TCB_tmp/qh-city.html",
				dataType:"text",
				success:function(tmp){
					 $(".qh-city .qh-main").html(baidu.template(tmp,data));
					 var qa = $(".qh-city .qh-piny");
					qa.on("click",".qh-a",function(){
						var index = $(this).index();
						dm = $(".qh-city .qh-dm");
						$(this).addClass("qh-b").siblings("a").removeClass("qh-b");
						dm.children("p").eq(index).show().siblings().hide();
						$(this).eq(0).show();
					});
					$(".qh-piny a").first().addClass("qh-b");
					$(".qh-dm p").first().show();
					$("#qh-lio").on("click","a",function(){
					$(".bei").text( $(this).text());
					});
				}
			})
		}
	});
	//=============================2====================================
		$.ajax({
		url:"/aj/getcitycode",
		dataType:"json",
		success:function(data){
			$.ajax({
				url:"TCB_tmp/qh-city.html",
				dataType:"text",
				success:function(tmp){
					 $("#sousuo-qh .qh-main").html(baidu.template(tmp,data));
					 // ===请求城市联动区县=====
				     var ct;
					$(" #sousuo-qh #qh-lio").on("click",".qhd",function(){
					ct = $(this).attr("value");
			 		$(".area-city .bei").attr("value",ct);
			 		wc(ct,);	
			 		$.ajax({
						url:"http://bang.360.cn/aj/get_area/?citycode="+ct,
						dataType:"jsonp",
						success:function(data){
						$.ajax({
						url:"TCB_tmp/xzqx.html",
						dataType:"text",
						success:function(tmp){
						$(".qbqu-list").html(baidu.template(tmp,data));	
						// ======
						$(".qbqu-list").on("click","a",function(){
							var area_id = $(this).attr("area_id");
							wc (ct,area_id);
						})
						// ======
						}
					});
				}
			}); 
					});
					 // ===
					 var qa = $("#sousuo-qh .qh-piny");
					qa.on("click",".qh-a",function(){
						var index = $(this).index();
						dm = $("#sousuo-qh .qh-dm");
						$(this).addClass("qh-b").siblings("a").removeClass("qh-b");
						dm.children("p").eq(index).show().siblings().hide();
						$(this).eq(0).show(); 
						});
					$("#sousuo-qh .qh-piny a").first().addClass("qh-b");
					$("#sousuo-qh .qh-dm p").first().show();
					$("#sousuo-qh #qh-lio").on("click","a",function(){
					$(".bei").text( $(this).text());
					});
				}
			})
		}
	});		
// ===========================店铺数据==================================
function wc(city_id,area_id){
		$.ajax({
			url:"/shop",
			dataType:"json",
			data:{
				city_id :city_id,
				area_id: area_id,
				pagesize : 5,
				pn :0,
			},
			success:function(data){
				$.ajax({
					url:"TCB_tmp/shop-list.html",
					dataType:"text",
					success:function(tmp){
						 $(".shopList").html(baidu.template(tmp,data));
					}
				});
			}
		});			
	}
wc("bei_jing",);	
// ======================修手机------------------------------------------------------
		$(".ox").on("mouseenter",function(){
			$(".danmu").show();
		});
		$(".danmu").on("mouseenter",function(){
			$(this).show();
		});
		$(".ox").on("mouseleave",function(){
			$(".danmu").hide();
		});
		$(".danmu").on("mouseleave",function(){
			$(this).hide();
		});
// ================================修电脑==============================================
		$(".os").on("mouseenter",function(){
			$(".danmuo").show();
		});
		$(".danmuo").on("mouseenter",function(){
			$(this).show();
		});
		$(".os").on("mouseleave",function(){
			$(".danmuo").hide();
		});
		$(".danmuo").on("mouseleave",function(){
			$(this).hide();
		});
// ==============================卖手机/电脑===================================
		$(".ol").on("mouseenter",function(){
			$(".danmut").show();
		});
		$(".danmut").on("mouseenter",function(){
			$(this).show();
		});
		$(".ol").on("mouseleave",function(){
			$(".danmut").hide();
		});
		$(".danmut").on("mouseleave",function(){
			$(this).hide();
		});
// ===============================买二手机=====================================
		$(".oo").on("mouseenter",function(){
			$(".danmuf").show();
		});
		$(".danmuf").on("mouseenter",function(){
			$(this).show();
		});
		$(".oo").on("mouseleave",function(){
			$(".danmuf").hide();
		});
		$(".danmuf").on("mouseleave",function(){
			$(this).hide();
		});
// =================================登录====================================
		$(".dsu").on("click",function(){
			$(".lightBox").show();
			$(".denglu").show();
		});
		$(".gbx").on("click",function(){
			$(".lightBox").hide();
			$(".denglu").hide();
		});
// ==========================切换城市=====================================
	$(".huan").on("click",function(){
		$(".qh-city").show();
		$("#sousuo-qh").hide();
	});
	$(".qh-gb").on("click",function(){
		$(".qh-city").hide();
		// $("#sousuo-qh").hide();
	});
	$(".qh-piny a").on("click",function(){
		$(this).attr("id","qh-a").prevAll().removeAttr("id","qh-a");
	})
// ======================切换城市==================================
	$(".area-city").on("click",function(){
		$("#sousuo-qh").show();
		$(".chooseqx").hide();
	});
// ===========================区县===============================
	$(".area-town").on("click",function(){
		$(".chooseqx").show();
	});
	$("#gbqulb").on("click",function(){
		$(".chooseqx").hide();
	});
	$(".area-town").on("click",function(){
							$("#sousuo-qh.qh-city").hide();
						});
// =================================================================
		$(".map").on("click",function(){
			$(".lightBox").show();
			$(".map-lightBox").show();
		});
		$(".map-close").on("click",function(){
			$(".lightBox").hide();
			$(".map-lightBox").hide();
		});
// ====================地图=======================================
			var map = new AMap.Map("map-main",{
				zoom:17,
				center:[116.397428, 39.90923]
			})
			var icon = new AMap.Icon({
				image:"http://webapi.amap.com/theme/v1.3/openhand.cur"
			})
			var marker = new AMap.Marker({
			map:map,
			icon:icon
		});
// =======================================================================