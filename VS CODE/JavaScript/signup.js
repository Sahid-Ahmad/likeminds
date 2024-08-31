document.getElementById('userCategory').addEventListener('change', function() {
    const category = this.value;
    const additionalFields = document.getElementById('additionalFields');
    additionalFields.innerHTML = '';

    if (category === 'admin') {
        additionalFields.innerHTML += `
            <div class="form-group">
                <label for="adminRole" class="form-label">Role*</label>
                <select id="adminRole" class="form-select" required>
                    <option value="" selected>Select Role</option>
                    <option>CEO</option>
                    <option>IT Officer</option>
                    <option>Supervisor</option>
                    <option>Accountant</option>
                    <option>Vendor</option>
                </select>
            </div>`;
    } else if (category === 'staff') {
        additionalFields.innerHTML += `
            <div class="form-group">
                <label for="staffRole" class="form-label">Role*</label>
                <select id="staffRole" class="form-select" required>
                    <option value="" selected>Select Role</option>
                    <option>Loan Officer</option>
                    <option>Marketer</option>
                </select>
            </div>`;
    }
});
