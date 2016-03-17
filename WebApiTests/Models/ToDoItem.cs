using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace WebApiTests.Models
{
    public class ToDoItem
    {
        public int ToDoItemId { get; set; }
        [Required, MaxLength(30)]
        public string Title { get; set; }
        public bool IsDone { get; set; }
    }
}