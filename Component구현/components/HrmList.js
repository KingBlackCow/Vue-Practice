export default {
  template: `
  <div id="app" align="center">
  <h2>사원목록</h2>

  <input type="" v-model="name" />
  <button>검색</button>
  <table class="table table-striped table-bordered table-hover">
    <thead style="background-color: blue; color: white">
      <tr>
        <th>사원 아이디</th>
        <th>사원명</th>
        <th>부서</th>
        <th>직책</th>
        <th>연봉</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(emp, index) in emps" v-if="emp.name.includes(name)">
        <td><a :href="'hrm_detail.html?empid=' + emp.id">{{emp.id}}</a></td>
        <td>{{emp.name}}</td>
        <td>{{emp.deptName}}</td>
        <td>{{emp.title}}</td>
        <td>{{emp.salary}}</td>
      </tr>
    </tbody>
  </table>
  <a :href="'hrm_add.html'">사원추가</a>
</div>
    `,
    data() {
      return {
        name:"",
        emps: []
      };
    },
    created() {
      const emplist = localStorage.getItem("emplist");
      let newEmp = {
        newEmps: [],
      };
      if (emplist) {
        newEmp = JSON.parse(emplist);
      } else {
        localStorage.setItem("emplist", JSON.stringify(newEmp));
      }
      this.emps = newEmp.newEmps;
    },
};
