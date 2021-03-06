export default {
  template: `
  <div id="app" align="center">

  <h2 style="color: cornflowerblue">SSAFY HRM ADD EMPLOEE</h2>
  <table class="table table-striped table-bordered table-hover">
    <thead style="background-color: blue; color: white"></thead>
    <tbody>
      <tr>
        <td width="200">아이디</td>
        <td><input type="" v-model="id" /></td>
      </tr>
      <tr>
        <td width="200">이름</td>
        <td><input type="" v-model="name" /></td>
      </tr>
      <tr>
        <td>이메일</td>
        <td><input type="" v-model="email" /></td>
      </tr>
      <tr>
        <td>고용일</td>
        <td><input type="date" v-model="hiredate" /></td>
      </tr>
      <tr>
        <td>관리자</td>
        <td><input type="" v-model="admin" /></td>
      </tr>
      <tr>
        <td>직책</td>
        <td>
          <select name="title" v-model="title">
            <option value="" selected>선택</option>
            <option value="Boss">사장</option>
            <option value="PlanningManager">기획부장</option>
            <option value="SalesManager">영업부장</option>
            <option value="Generalmanager">총무부장</option>
            <option value="HumanManager">인사부장</option>
            <option value="Manager">과장</option>
            <option value="SalesBoss">영업대표이사</option>
            <option value="Salary">사원</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>부서</td>
        <td><input type="" v-model="deptName" /></td>
      </tr>
      <tr>
        <td>월급</td>
        <td><input type="" v-model="salary" /></td>
      </tr>
      <tr>
        <td>커미션</td>
        <td><input type="" v-model="commission" /></td>
      </tr>
    </tbody>
  </table>
  <button @click="checkVal">사원추가</button>
  <a :href="'hrm_list.html'"><button v-on:click>목록</button></a>
</div>
    `,
  data() {
    return {
      id: "",
      name: "",
      email: "",
      hiredate: "",
      admin: "",
      title: "",
      deptName: "",
      salary: "",
      commission: "",
      emp: [],
    };
  },
  methods: {
    checkVal() {
      if (!this.name) {
        alert("이름 입력!");
      } else if (!this.email) {
        alert("이메일 입력!");
      } else if (!this.hiredate) {
        alert("고용일 입력!");
      } else if (!this.admin) {
        alert("관리자 입력!");
      } else if (!this.deptName) {
        alert("부서 입력!");
      } else if (!this.salary) {
        alert("월급 입력!");
      } else {
        this.register();
      }
    },
    register() {
      const emplist = localStorage.getItem("emplist");
      let newEmpList = {
        newEmps: [],
      };

      if (emplist) {
        newEmpList = JSON.parse(emplist);
      }

      newEmpList.newEmps.push({
        id: this.id,
        name: this.name,
        title: this.title,
        deptName: this.deptName,
        salary: this.salary,
        email: this.email,
        hiredate: this.hiredate,
        commission: this.commission,
      });

      localStorage.setItem("emplist", JSON.stringify(newEmpList));

      alert("등록이 완료되었습니다.");
    },
  },
};

