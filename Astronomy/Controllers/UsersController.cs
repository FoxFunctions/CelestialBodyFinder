using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Astronomy.Models;
using Microsoft.AspNetCore.Mvc;

namespace Astronomy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        astroUsersContext db = new astroUsersContext();
        [HttpGet("ShowAllUsers")]
        public List<User> ShowAllUsers()
        {
            return db.Users.ToList();
        }

        [HttpGet("GetUserById/{id}")]
        public User GetUserById(int id)
        {
            return db.Users.Where(u => u.Id == id).FirstOrDefault();
        }

        [HttpGet("GetUserByName/{searchTerm}")]
        public List<User> GetUserByName(string searchTerm)
        {
            return db.Users.Where(n => n.Name.Contains(searchTerm)).ToList();
        }

        [HttpPut("CreateNewUser")]
        public string CreateUser(User u)
        {
            db.Users.Add(u);
            db.SaveChanges();
            return $"{u.Name} was added to the database";
        }

        [HttpDelete("DeleteUser/{id}")]
        public string DeleteUser(int id)
        {
            User u = db.Users.Find(id);
            db.Users.Remove(u);
            db.SaveChanges();
            return $"{u.Id} was removed from the database";
        }

        [HttpPost("UpdateUser/{id}")]
        public string UpdateUser(int id, User updatedUser)
        {
            User u = db.Users.Find(id);
            u.Name = updatedUser.Name;
            u.City = updatedUser.City;
            u.State = updatedUser.State;

            db.Users.Update(u);
            db.SaveChanges();
            return $"User at ID {u.Id} has been updated";
        }

    }
}

