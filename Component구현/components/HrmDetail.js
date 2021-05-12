export default {
  template: `
  <div id="app" align="center">
  <header-nav></header-nav>
  <h2>사원목록</h2>
  <table class="table table-striped table-bordered table-hover">
    <thead style="background-color: blue; color: white">
      <tr>
        <th width="100">사원 아이디</th>
        <th>사원명</th>
        <th>이메일</th>
        <th>부서</th>
        <th>직책</th>
        <th>고용일</th>
        <th>연봉</th>
        <th>커미션</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(emp, index) in emps" v-if="emp.id == p">
        <td>{{emp.id}}</td>
        <td>{{emp.name}}</td>
        <td>{{emp.email}}</td>
        <td>{{emp.deptName}}</td>
        <td>{{emp.title}}</td>
        <td>{{emp.hiredate}}</td>
        <td>{{emp.salary}}</td>
        <td>{{emp.commission}}</td>
      </tr>
    </tbody>
  </table>
  <a :href="'hrm_list.html'">사원목록</a>
</div>
    `,
  data() {
    return {
      name: "",
      emps: [],
      p: "",
    };
  },
  created() {
    const params = new URL(document.location).searchParams;
    this.p = params.get("empid");
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
