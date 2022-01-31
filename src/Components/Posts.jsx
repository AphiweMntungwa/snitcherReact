import React, { useState, useEffect } from "react";

function Posts() {
  const [resource, setResource] = useState("home");
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/index`)
      .then((data) => data.json())
      .then(({ list }) => {
        const posts = [];
        list.forEach((el) => {
          posts.push(el);
        });
        setItem(posts);
      })
      .catch((e) => alert("ERROR ON FETCH"));
  });

  return (
    <ul className="">
      {items.map((el) => (
        <li key={el._id}>
          <div class="card mb-3 flex-row set-div-h">
            <h2 class="card-header">{el.title}</h2>
            <p class="card-header description">{el.description}</p>
          </div>
        </li>
      ))}
      {/* <% for(thought of list){ %>
      <div id="overflow" class="card mb-3 flex-row set-div-h">
          <div class="">
              <h2 class="card-header">
                  <%=thought.title%>
              </h2>
              <li class="card-header description">
                  <%=thought.description%>
              </li>
              <li class="card-header py-2"><a class="btn btn-info" href="/index/<%=thought._id%>">Show Details</a>
                  <% if (thought.media && thought.media.length){ %>
                      <%  thought.media.forEach((el, i)=>{ %>
                          <%  if(i%2 === 0){ %>
                              <span class="d-inline">
                                  <img src="<%=thought.media[i]%>" class="inline-image" alt="">
                              </span>
                              <% }%>
                                  <%})%>
                                      <%}%>
              </li>
          </div>
      </div>
      <% } %> */}
    </ul>
  );
}
export default Posts;
