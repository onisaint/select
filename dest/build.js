function transSelectBox(){$selectBox.classList.add("hidden"),createDD(),handleSubmit()}function createDD(){var e=document.createElement("div");e.id="replace";var t=document.createElement("button");t.id="dd",t.type="button";var d=document.createElement("img");d.src="./icons/profile.svg",d.id="img",t.appendChild(d);var n=document.createElement("p");n.appendChild(document.createTextNode("profile")),t.appendChild(n);var i=document.createElement("span"),c=document.createElement("img");c.src="./icons/dd.svg",i.appendChild(c),t.appendChild(i),e.appendChild(t);var l=["settings","password","logout"],a=document.createElement("ul");l.map(function(e){var t=document.createElement("li"),d=document.createElement("p"),n=document.createElement("img"),i=document.createElement("div");n.src="./icons/"+e+".svg",d.appendChild(document.createTextNode(e)),i.setAttribute("class","pad5"),i.appendChild(n),i.appendChild(d),t.classList.add("options"),i.addEventListener("click",handleOptionClick),t.appendChild(i),a.appendChild(t)});var o=document.createElement("div");o.id="list-item",o.classList.add("hide");var s=document.createElement("div");s.classList.add("img-top");var m=document.createElement("div");m.classList.add("icon");var r=document.createElement("DIV");r.classList.add("rect"),m.appendChild(r),s.appendChild(m),o.appendChild(s),o.appendChild(a),e.appendChild(o),$form.insertBefore(e,$submit),handleDropDown()}function handleDropDown(){$dd=document.getElementById("dd"),$listItem=document.getElementById("list-item"),$li=document.getElementsByClassName("options"),$dd.addEventListener("click",function(){toggle()})}function toggle(){this.$listItem.classList.toggle(_hidden),this.$dd.classList.toggle(_active)}function handleOptionClick(e){if(e.target===this){var t=e.target.childNodes;$dd.childNodes[0].src=t[0].src,$dd.childNodes[1].innerText=t[1].innerText,document.getElementById("select-box").value=t[1].innerText,toggle()}}function handleSubmit(){$form.addEventListener("submit",function(e){if("profile"==$dd.childNodes[1].innerText)return e.preventDefault(),void alert("select one in the dropdown")})}var $selectBox=document.getElementById("sb"),$form=document.getElementById("select-form"),$submit=document.getElementById("submit"),_hidden="show",_active="active",$dd,$li,$listItem;window.onload=function(){transSelectBox()};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkLmpzIl0sIm5hbWVzIjpbInRyYW5zU2VsZWN0Qm94IiwiJHNlbGVjdEJveCIsImNsYXNzTGlzdCIsImFkZCIsImNyZWF0ZUREIiwiaGFuZGxlU3VibWl0IiwicmVwbGFjZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZGQiLCJ0eXBlIiwiaW1nIiwic3JjIiwiaWNvblJvb3QiLCJhcHBlbmRDaGlsZCIsInAiLCJjcmVhdGVUZXh0Tm9kZSIsInNwYW4iLCJpbWcyIiwib3B0aW9ucyIsInVsIiwibWFwIiwib3B0aW9uIiwibGkiLCJwYWQ1Iiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU9wdGlvbkNsaWNrIiwibGlzdEl0ZW0iLCJpbWdUb3AiLCJpY29uIiwiZEljb24iLCIkZm9ybSIsImluc2VydEJlZm9yZSIsIiRzdWJtaXQiLCJoYW5kbGVEcm9wRG93biIsIiRkZCIsImdldEVsZW1lbnRCeUlkIiwiJGxpc3RJdGVtIiwiJGxpIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRvZ2dsZSIsInRoaXMiLCJfaGlkZGVuIiwiX2FjdGl2ZSIsImV2ZW50IiwidGFyZ2V0IiwiY2hpbGROb2RlcyIsImlubmVyVGV4dCIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJ3aW5kb3ciLCJvbmxvYWQiXSwibWFwcGluZ3MiOiJBQVNBLFNBQVNBLGlCQUNMQyxXQUFXQyxVQUFVQyxJQUFJLFVBQ3pCQyxXQUNBQyxlQUVKLFNBQVNELFdBQ0wsSUFBSUUsRUFBVUMsU0FBU0MsY0FBYyxPQUNyQ0YsRUFBUUcsR0FBSyxVQUNiLElBRUlDLEVBQUtILFNBQVNDLGNBQWMsVUFDaENFLEVBQUdELEdBQUssS0FDUkMsRUFBR0MsS0FBTyxTQUNWLElBQUlDLEVBQU1MLFNBQVNDLGNBQWMsT0FDakNJLEVBQUlDLElBQU1DLHNCQUNWRixFQUFJSCxHQUFLLE1BQ1RDLEVBQUdLLFlBQVlILEdBQ2YsSUFBSUksRUFBSVQsU0FBU0MsY0FBYyxLQUMvQlEsRUFBRUQsWUFBWVIsU0FBU1UsZUFBZSxZQUN0Q1AsRUFBR0ssWUFBWUMsR0FDZixJQUFJRSxFQUFPWCxTQUFTQyxjQUFjLFFBQzlCVyxFQUFPWixTQUFTQyxjQUFjLE9BQ2xDVyxFQUFLTixJQUFNQyxpQkFDWEksRUFBS0gsWUFBWUksR0FDakJULEVBQUdLLFlBQVlHLEdBQ2ZaLEVBQVFTLFlBQVlMLEdBR3BCLElBQUlVLEdBQVcsV0FBWSxXQUFZLFVBQ25DQyxFQUFLZCxTQUFTQyxjQUFjLE1BRWhDWSxFQUFRRSxJQUFJLFNBQVVDLEdBQ2xCLElBQUlDLEVBQUtqQixTQUFTQyxjQUFjLE1BQzVCUSxFQUFJVCxTQUFTQyxjQUFjLEtBQzNCSSxFQUFNTCxTQUFTQyxjQUFjLE9BQzdCaUIsRUFBT2xCLFNBQVNDLGNBQWMsT0FDbENJLEVBQUlDLElBNUJPLFdBNEJVVSxFQUFTLE9BQzlCUCxFQUFFRCxZQUFZUixTQUFTVSxlQUFlTSxJQUN0Q0UsRUFBS0MsYUFBYSxRQUFTLFFBQzNCRCxFQUFLVixZQUFZSCxHQUNqQmEsRUFBS1YsWUFBWUMsR0FDakJRLEVBQUd0QixVQUFVQyxJQUFJLFdBQ2pCc0IsRUFBS0UsaUJBQWlCLFFBQVNDLG1CQUMvQkosRUFBR1QsWUFBWVUsR0FDZkosRUFBR04sWUFBWVMsS0FFbkIsSUFBSUssRUFBV3RCLFNBQVNDLGNBQWMsT0FDdENxQixFQUFTcEIsR0FBSyxZQUNkb0IsRUFBUzNCLFVBQVVDLElBQUksUUFDdkIsSUFBSTJCLEVBQVN2QixTQUFTQyxjQUFjLE9BQ3BDc0IsRUFBTzVCLFVBQVVDLElBQUksV0FDckIsSUFBSTRCLEVBQU94QixTQUFTQyxjQUFjLE9BQ2xDdUIsRUFBSzdCLFVBQVVDLElBQUksUUFDbkIsSUFBSTZCLEVBQVF6QixTQUFTQyxjQUFjLE9BQ25Dd0IsRUFBTTlCLFVBQVVDLElBQUksUUFDcEI0QixFQUFLaEIsWUFBWWlCLEdBQ2pCRixFQUFPZixZQUFZZ0IsR0FDbkJGLEVBQVNkLFlBQVllLEdBQ3JCRCxFQUFTZCxZQUFZTSxHQUNyQmYsRUFBUVMsWUFBWWMsR0FDcEJJLE1BQU1DLGFBQWE1QixFQUFTNkIsU0FDNUJDLGlCQUVKLFNBQVNBLGlCQUNMQyxJQUFNOUIsU0FBUytCLGVBQWUsTUFDOUJDLFVBQVloQyxTQUFTK0IsZUFBZSxhQUNwQ0UsSUFBTWpDLFNBQVNrQyx1QkFBdUIsV0FDdENKLElBQUlWLGlCQUFpQixRQUFTLFdBQzFCZSxXQUdSLFNBQVNBLFNBQ0xDLEtBQUtKLFVBQVVyQyxVQUFVd0MsT0FBT0UsU0FDaENELEtBQUtOLElBQUluQyxVQUFVd0MsT0FBT0csU0FFOUIsU0FBU2pCLGtCQUFrQmtCLEdBQ3ZCLEdBQUlBLEVBQU1DLFNBQVdKLEtBQXJCLENBRUEsSUFBSWxCLEVBQU9xQixFQUFNQyxPQUFPQyxXQUN4QlgsSUFBSVcsV0FBVyxHQUFHbkMsSUFBTVksRUFBSyxHQUFHWixJQUNoQ3dCLElBQUlXLFdBQVcsR0FBR0MsVUFBWXhCLEVBQUssR0FBR3dCLFVBQ3RDMUMsU0FBUytCLGVBQWUsY0FBY1ksTUFBUXpCLEVBQUssR0FBR3dCLFVBQ3REUCxVQUVKLFNBQVNyQyxlQUNMNEIsTUFBTU4saUJBQWlCLFNBQVUsU0FBVXdCLEdBQ3ZDLEdBQW1DLFdBQS9CZCxJQUFJVyxXQUFXLEdBQUdDLFVBR2xCLE9BRkFFLEVBQUVDLHNCQUNGQyxNQUFNLGdDQWpHbEIsSUFBSXBELFdBQWFNLFNBQVMrQixlQUFlLE1BQ3JDTCxNQUFRMUIsU0FBUytCLGVBQWUsZUFDaENILFFBQVU1QixTQUFTK0IsZUFBZSxVQUNsQ00sUUFBVSxPQUNWQyxRQUFVLFNBQ1ZSLElBQUtHLElBQUtELFVBQ2RlLE9BQU9DLE9BQVMsV0FDWnZEIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICRzZWxlY3RCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2InKTtcbnZhciAkZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtZm9ybScpO1xudmFyICRzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XG52YXIgX2hpZGRlbiA9ICdzaG93JztcbnZhciBfYWN0aXZlID0gJ2FjdGl2ZSc7XG52YXIgJGRkLCAkbGksICRsaXN0SXRlbTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdHJhbnNTZWxlY3RCb3goKTtcbn07XG5mdW5jdGlvbiB0cmFuc1NlbGVjdEJveCgpIHtcbiAgICAkc2VsZWN0Qm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNyZWF0ZUREKCk7XG4gICAgaGFuZGxlU3VibWl0KCk7XG59XG5mdW5jdGlvbiBjcmVhdGVERCgpIHtcbiAgICB2YXIgcmVwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlcGxhY2UuaWQgPSAncmVwbGFjZSc7XG4gICAgdmFyIGljb25Sb290ID0gJy4vaWNvbnMvJztcbiAgICAvL2NyZWF0ZSBidXR0b25cbiAgICB2YXIgZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZC5pZCA9ICdkZCc7XG4gICAgZGQudHlwZSA9ICdidXR0b24nO1xuICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gaWNvblJvb3QgKyAncHJvZmlsZScgKyAnLnN2Zyc7XG4gICAgaW1nLmlkID0gJ2ltZyc7XG4gICAgZGQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdwcm9maWxlJykpO1xuICAgIGRkLmFwcGVuZENoaWxkKHApO1xuICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHZhciBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nMi5zcmMgPSBpY29uUm9vdCArICdkZCcgKyAnLnN2Zyc7XG4gICAgc3Bhbi5hcHBlbmRDaGlsZChpbWcyKTtcbiAgICBkZC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICByZXBsYWNlLmFwcGVuZENoaWxkKGRkKTtcbiAgICAvL2J0biBjb21wbGV0ZVxuICAgIC8vI2xpc3RJdGVtXG4gICAgdmFyIG9wdGlvbnMgPSBbJ3NldHRpbmdzJywgJ3Bhc3N3b3JkJywgJ2xvZ291dCddO1xuICAgIHZhciB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgLy9jcmVhdGUgbGlzdFxuICAgIG9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdmFyIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdmFyIHBhZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1nLnNyYyA9IGljb25Sb290ICsgb3B0aW9uICsgJy5zdmcnO1xuICAgICAgICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG9wdGlvbikpO1xuICAgICAgICBwYWQ1LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBcInBhZDVcIik7XG4gICAgICAgIHBhZDUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgcGFkNS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xuICAgICAgICBwYWQ1LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3B0aW9uQ2xpY2spO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChwYWQ1KTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIHZhciBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtLmlkID0gJ2xpc3QtaXRlbSc7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIHZhciBpbWdUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdUb3AuY2xhc3NMaXN0LmFkZCgnaW1nLXRvcCcpO1xuICAgIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgdmFyIGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZEljb24uY2xhc3NMaXN0LmFkZCgncmVjdCcpO1xuICAgIGljb24uYXBwZW5kQ2hpbGQoZEljb24pO1xuICAgIGltZ1RvcC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpbWdUb3ApO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHVsKTtcbiAgICByZXBsYWNlLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAkZm9ybS5pbnNlcnRCZWZvcmUocmVwbGFjZSwgJHN1Ym1pdCk7XG4gICAgaGFuZGxlRHJvcERvd24oKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZURyb3BEb3duKCkge1xuICAgICRkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZCcpO1xuICAgICRsaXN0SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LWl0ZW0nKTtcbiAgICAkbGkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb25zJyk7XG4gICAgJGRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0b2dnbGUoKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICB0aGlzLiRsaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKF9oaWRkZW4pO1xuICAgIHRoaXMuJGRkLmNsYXNzTGlzdC50b2dnbGUoX2FjdGl2ZSk7XG59XG5mdW5jdGlvbiBoYW5kbGVPcHRpb25DbGljayhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgcGFkNSA9IGV2ZW50LnRhcmdldC5jaGlsZE5vZGVzO1xuICAgICRkZC5jaGlsZE5vZGVzWzBdLnNyYyA9IHBhZDVbMF0uc3JjO1xuICAgICRkZC5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dCA9IHBhZDVbMV0uaW5uZXJUZXh0O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYm94JykudmFsdWUgPSBwYWQ1WzFdLmlubmVyVGV4dDtcbiAgICB0b2dnbGUoKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAkZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJGRkLmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0ID09ICdwcm9maWxlJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWxlcnQoJ3NlbGVjdCBvbmUgaW4gdGhlIGRyb3Bkb3duJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdfQ==
